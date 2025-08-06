import { DrugStatusType } from "./drug";

export interface FilterOption {
  id: DrugStatusType;
  label: string;
}

export interface FilterButtonProps {
  options: FilterOption[];
  selectedFilters: DrugStatusType[];
  onFilterChange: (filters: DrugStatusType[]) => void;
  placeholder?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}
