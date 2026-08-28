"use server";

import { cookies } from "next/headers";
import { updateTag } from "next/cache";
import { getBistroData, writeBackupCache } from "@/utils/cache";

// Auth Check Helper
async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  const expectedPassword = (process.env.ADMIN_PASSWORD || "tonifruk1987!").trim();
  
  if (!session || session.trim() !== expectedPassword) {
    throw new Error("Unauthorized admin access");
  }
}

// 1. Auth Actions
export async function loginAdmin(password: string) {
  const expectedPassword = (process.env.ADMIN_PASSWORD || "tonifruk1987!").trim();
  const inputPassword = (password || "").trim();
  
  console.log(`[loginAdmin] Input length: ${inputPassword.length}, Expected length: ${expectedPassword.length}`);
  
  if (inputPassword === expectedPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", expectedPassword, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/"
    });
    return { success: true };
  }
  return { success: false, error: "Pogrešna lozinka" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}

// 2. Menu Item CRUD Actions
export async function createMenuItem(formData: {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  display_order?: number;
}) {
  await checkAuth();

  const data = await getBistroData();
  const menuItems = data.menu_items || [];

  const categoryItems = menuItems.filter((i: any) => i.category === formData.category);
  const maxOrder = categoryItems.reduce((max: number, item: any) => Math.max(max, item.display_order ?? 0), -1);
  const nextOrder = formData.display_order ?? (maxOrder + 1);

  const newItem = {
    id: formData.id,
    category: formData.category,
    name: formData.name,
    description: formData.description,
    price: formData.price,
    display_order: nextOrder,
    active: true
  };

  data.menu_items = [...menuItems, newItem];
  await writeBackupCache(data);

  updateTag("bistro-data");
  return { success: true };
}

export async function updateMenuItem(
  id: string,
  updates: {
    name?: string;
    description?: string;
    price?: number;
    active?: boolean;
  }
) {
  await checkAuth();

  const data = await getBistroData();
  data.menu_items = (data.menu_items || []).map((item: any) => {
    if (item.id === id) {
      return { ...item, ...updates };
    }
    return item;
  });

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

export async function deleteMenuItem(id: string) {
  await checkAuth();

  const data = await getBistroData();
  data.menu_items = (data.menu_items || []).filter((item: any) => item.id !== id);

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

export async function reorderMenuItem(id: string, direction: "up" | "down") {
  await checkAuth();

  const data = await getBistroData();
  const menuItems = data.menu_items || [];

  const targetItem = menuItems.find((i: any) => i.id === id);
  if (!targetItem) throw new Error("Item not found");

  const categoryList = menuItems
    .filter((i: any) => i.category === targetItem.category)
    .sort((a: any, b: any) => (a.display_order ?? 0) - (b.display_order ?? 0));

  const currentIndex = categoryList.findIndex((i: any) => i.id === id);
  if (currentIndex === -1) return { success: false };

  const targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
  if (targetIndex < 0 || targetIndex >= categoryList.length) return { success: false };

  const itemA = categoryList[currentIndex];
  const itemB = categoryList[targetIndex];

  const tempOrder = itemA.display_order;
  itemA.display_order = itemB.display_order;
  itemB.display_order = tempOrder;

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

// 3. Opening Hours Actions
export async function updateOpeningHours(
  id: number,
  updates: {
    day_group: string;
    open_time: string;
    close_time: string;
    season_label: string;
  }
) {
  await checkAuth();

  const data = await getBistroData();
  data.opening_hours = (data.opening_hours || []).map((h: any) => {
    if (h.id === id) {
      return { ...h, ...updates };
    }
    return h;
  });

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

// 4. Site Content Text Actions
export async function updateSiteContent(key: string, language: string, value: string) {
  await checkAuth();

  const data = await getBistroData();
  const langKey = language.toUpperCase();

  if (data.site_content && typeof data.site_content === "object" && !Array.isArray(data.site_content)) {
    if (!data.site_content[langKey]) data.site_content[langKey] = {};
    const parts = key.split(".");
    let curr = data.site_content[langKey];
    for (let i = 0; i < parts.length; i++) {
      if (i === parts.length - 1) {
        curr[parts[i]] = value;
      } else {
        if (!curr[parts[i]]) curr[parts[i]] = {};
        curr = curr[parts[i]];
      }
    }
  } else if (Array.isArray(data.site_content)) {
    const existingIndex = data.site_content.findIndex((r: any) => r.key === key && r.language.toLowerCase() === language.toLowerCase());
    if (existingIndex >= 0) {
      data.site_content[existingIndex].value = value;
    } else {
      data.site_content.push({ key, language: language.toLowerCase(), value });
    }
  }

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

export async function updateVacationSettings(
  vacationStart: string | null,
  vacationEnd: string | null
) {
  await checkAuth();

  const data = await getBistroData();
  data.site_settings = {
    ...(data.site_settings || {}),
    vacation_start: vacationStart || null,
    vacation_end: vacationEnd || null
  };

  await writeBackupCache(data);
  updateTag("bistro-data");
  return { success: true };
}

