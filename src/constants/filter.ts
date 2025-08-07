import { FilterOption } from "@/types/filter";

/**
 * filterOptions
 *
 * An array of filter options used for filtering drug candidates by their status.
 * Each option includes a unique id and a human-readable label.
 *
 * Options:
 * - "approved": Drugs that have been approved.
 * - "in_dev": Drugs that are currently in development.
 * - "pending": Drugs that are pending approval.
 * - "rejected": Drugs that have been rejected.
 */
export const filterOptions: FilterOption[] = [
  { id: "approved", label: "Approved" },
  { id: "in_dev", label: "In Development" },
  { id: "pending", label: "Pending" },
  { id: "rejected", label: "Rejected" },
];
