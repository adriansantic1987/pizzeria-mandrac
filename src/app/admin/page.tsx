import { getBistroData } from "@/utils/cache";
import AdminDashboard from "@/components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const bistroData = await getBistroData();

  const menuItems = bistroData.menu_items || [];
  const hours = bistroData.opening_hours || [];
  const siteContent = Array.isArray(bistroData.site_content) ? bistroData.site_content : [];
  const vacationStart = bistroData.site_settings?.vacation_start || null;
  const vacationEnd = bistroData.site_settings?.vacation_end || null;

  // Static analytics object (0 views when offline / database disconnected)
  const totalViews: Record<string, number> = {
    hero: 0,
    jelovnik: 0,
    kontakt: 0,
    rezervacija: 0
  };

  const viewsByDay: Record<string, Record<string, number>> = {};
  const last30DaysList: string[] = [];

  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    last30DaysList.push(dateStr);
    viewsByDay[dateStr] = { hero: 0, jelovnik: 0, kontakt: 0, rezervacija: 0 };
  }

  return (
    <AdminDashboard
      initialMenuItems={menuItems}
      initialHours={hours}
      initialSiteContent={siteContent}
      initialVacationStart={vacationStart}
      initialVacationEnd={vacationEnd}
      analytics={{
        totalViews,
        viewsByDay,
        last30DaysList
      }}
    />
  );
}

