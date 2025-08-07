import { DrugStatusType } from "./drug";

/**
 * GlobalContextType
 *
 * Represents the global context type for the application, providing state and setters
 * for pagination, search, and drug status filtering.
 *
 * @property {number} currentPage - The current page number in the application.
 * @property {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - Function to update the current page number.
 * @property {string} searchValue - The current search input value.
 * @property {React.Dispatch<React.SetStateAction<string>>} setSearchValue - Function to update the search value.
 * @property {DrugStatusType[]} filter - Array of selected drug status filters.
 * @property {React.Dispatch<React.SetStateAction<DrugStatusType[]>>} setFilter - Function to update the filters.
 */
export interface GlobalContextType {
  /**
   * The current page number in the application.
   */
  currentPage: number;

  /**
   * Function to update the current page number.
   */
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

  /**
   * The current search input value.
   */
  searchValue: string;

  /**
   * Function to update the search value.
   */
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;

  /**
   * Array of selected drug status filters.
   */
  filter: DrugStatusType[];

  /**
   * Function to update the filters.
   */
  setFilter: React.Dispatch<React.SetStateAction<DrugStatusType[]>>;
}
