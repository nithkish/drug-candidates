export type DrugStatusType = "approved" | "pending" | "rejected" | "in_dev";

export interface DrugStatusHistoryEntry {
  status: DrugStatusType;
  date: string;
  note?: string;
}

export interface DrugType {
  id: string;
  name: string;
  status: DrugStatusType;
  description: string;
  category: string;
  manufacturer: string;
  createdAt: string;
  updatedAt: string;
  statusHistory?: DrugStatusHistoryEntry[];
}
