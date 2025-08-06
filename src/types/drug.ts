export type DrugStatusType = "approved" | "pending" | "rejected" | "in_dev";

export interface DrugType {
  id: string;
  name: string;
  status: DrugStatusType;
  description: string;
  category: string;
  manufacturer: string;
  createdAt: string;
  updatedAt: string;
}
