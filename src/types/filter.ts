import { DrugStatusType } from "./drug";

/**
 * FilterOption
 *
 * Represents a single filter option for drug status filtering.
 *
 * @property {DrugStatusType} id - The status value for the filter.
 * @property {string} label - Human-readable label for the filter option.
 */
export interface FilterOption {
  id: DrugStatusType;
  label: string;
}

/**
 * FilterButtonProps
 *
 * Props for a filter button component that allows users to select and change drug status filters.
 *
 * @property {FilterOption[]} options - Array of available filter options.
 * @property {DrugStatusType[]} selectedFilters - Array of currently selected status filters.
 * @property {(filters: DrugStatusType[]) => void} onFilterChange - Callback when filters change.
 * @property {string} [placeholder] - Optional placeholder text for the filter button.
 * @property {string} [className] - Optional CSS class for custom styling.
 */
export interface FilterButtonProps {
  options: FilterOption[];
  selectedFilters: DrugStatusType[];
  onFilterChange: (filters: DrugStatusType[]) => void;
  placeholder?: string;
  className?: string;
}
