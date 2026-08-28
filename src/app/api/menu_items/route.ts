import { NextResponse } from "next/server";
import { getBistroData } from "@/utils/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const bistroData = await getBistroData();
    return NextResponse.json(bistroData.menu_items || []);
  } catch (err: any) {
    console.error("[API menu_items] Server error:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}

