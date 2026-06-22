export const mockAccounts = [
  { id: "acc_001", username: "examplebrand", type: "business", followers: "1.2M", source: "Meta official API", confidence: 1 },
  { id: "acc_002", username: "creator_studio", type: "creator", followers: "284K", source: "Business Discovery", confidence: 0.96 },
];
export const mockActivityEvents = [
  { id: "evt_001", event: "mention_inbound", source: "Meta webhook", confidence: "100%", freshness: "2m ago" },
  { id: "evt_002", event: "comment_inbound", source: "Meta comments API", confidence: "100%", freshness: "8m ago" },
  { id: "evt_003", event: "snapshot_refresh", source: "Business Discovery", confidence: "96%", freshness: "1h ago" },
];
