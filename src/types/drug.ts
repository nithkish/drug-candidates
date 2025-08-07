/**
 * DrugStatusType
 *
 * Enum-like union type representing the possible statuses for a drug candidate.
 * - "approved": Drug has been approved for use.
 * - "pending": Drug is under regulatory review.
 * - "rejected": Drug has been rejected.
 * - "in_dev": Drug is currently in development.
 */
export type DrugStatusType = "approved" | "pending" | "rejected" | "in_dev";

/**
 * DrugStatusHistoryEntry
 *
 * Represents a single entry in a drug's status history.
 *
 * @property {DrugStatusType} status - The status at this point in history.
 * @property {string} date - ISO date string for when the status was set.
 * @property {string} [note] - Optional note or comment about the status change.
 */
export interface DrugStatusHistoryEntry {
  status: DrugStatusType;
  date: string;
  note?: string;
}

/**
 * DrugType
 *
 * Represents a drug candidate and its associated data.
 *
 * @property {string} id - Unique identifier for the drug.
 * @property {string} name - Drug name.
 * @property {DrugStatusType} status - Current status of the drug.
 * @property {string} description - Brief description of the drug and its use.
 * @property {string} category - Drug category or class.
 * @property {string} manufacturer - Name of the manufacturer.
 * @property {string} createdAt - ISO date string for when the drug was created.
 * @property {string} updatedAt - ISO date string for when the drug was last updated.
 * @property {DrugStatusHistoryEntry[]} [statusHistory] - Optional array of status history entries.
 */
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
