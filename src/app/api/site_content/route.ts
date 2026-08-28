import { NextResponse } from "next/server";
import { getBistroData } from "@/utils/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const bistroData = await getBistroData();
    return NextResponse.json({
      siteContent: bistroData.site_content || {},
      settings: bistroData.site_settings || { vacation_start: null, vacation_end: null }
    });
  } catch (err: any) {
    console.error("[API site_content] Server error:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}

