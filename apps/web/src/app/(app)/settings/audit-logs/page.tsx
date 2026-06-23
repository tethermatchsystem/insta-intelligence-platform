import { SettingsSubpage } from "@/components/settings/settings-subpage";
import { settingsSubpagesMockData } from "@/lib/mock-data/settings-subpages";

export default function Page() {
  return <SettingsSubpage page={settingsSubpagesMockData.auditLogs} />;
}
