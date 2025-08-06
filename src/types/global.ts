import { DrugStatusType } from "./drug";

/**
 * Represents the global context type for the application.
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

  searchValue: string;

  setSearchValue: React.Dispatch<React.SetStateAction<string>>;

  filter: DrugStatusType[];

  setFilter: React.Dispatch<React.SetStateAction<DrugStatusType[]>>;
}
