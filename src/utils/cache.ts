import { 
  FALLBACK_MENU_ITEMS, 
  FALLBACK_OPENING_HOURS, 
  FALLBACK_SITE_CONTENT 
} from "./fallbackData";
import { unstable_cache } from "next/cache";

const CACHE_FILE_PATH = "./bistro_cache.json";

// Dynamic imports of 'fs' for server-only context
async function getFs() {
  if (typeof window === "undefined") {
    try {
      return await import("fs/promises");
    } catch (e) {
      console.warn("fs module not available", e);
    }
  }
  return null;
}

// Write helper for admin actions and cache updates
export async function writeBackupCache(data: any) {
  const fs = await getFs();
  if (fs) {
    try {
      await fs.writeFile(CACHE_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    } catch (e) {
      // In serverless read-only filesystems, fallback to /tmp
      try {
        await fs.writeFile("/tmp/bistro_cache.json", JSON.stringify(data, null, 2), "utf-8");
      } catch (err) {
        console.warn("Failed to write fallback cache file", err);
      }
    }
  }
}

// Read helper
export async function readBackupCache(): Promise<any | null> {
  const fs = await getFs();
  if (fs) {
    try {
      const content = await fs.readFile(CACHE_FILE_PATH, "utf-8");
      return JSON.parse(content);
    } catch (e) {
      try {
        const content = await fs.readFile("/tmp/bistro_cache.json", "utf-8");
        return JSON.parse(content);
      } catch (err) {
        return null;
      }
    }
  }
  return null;
}

// Main fetcher utilizing local file cache and static fallbacks
export const getBistroData = unstable_cache(
  async () => {
    const backup = await readBackupCache();
    if (backup) {
      return backup;
    }

    return {
      menu_items: FALLBACK_MENU_ITEMS,
      site_content: FALLBACK_SITE_CONTENT,
      opening_hours: FALLBACK_OPENING_HOURS,
      site_settings: { vacation_start: null, vacation_end: null },
      timestamp: Date.now()
    };
  },
  ["bistro-local-cache"],
  { revalidate: 60, tags: ["bistro-data"] }
);

