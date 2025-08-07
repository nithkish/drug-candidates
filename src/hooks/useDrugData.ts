import { useMemo } from "react";
import { DrugType } from "@/types/drug";
import { mockDrugsData } from "@/constants/drugs-list";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

/**
 * useDrugData
 *
 * React hook for filtering, searching, and paginating drug candidate data.
 * Integrates with the global context to access search value, status filters, and current page.
 *
 * Features:
 * - Filters drugs by search term (case-insensitive, matches name).
 * - Filters drugs by selected status filters.
 * - Returns paginated results for the current page.
 *
 * @param {Object} [props]
 * @param {number} [props.itemsPerPage] - Number of items to show per page.
 *
 * @returns {Object} An object containing:
 *   - filteredDrugs: DrugType[] — All drugs matching the search and filters.
 *   - paginatedDrugs: DrugType[] — Drugs for the current page.
 *   - totalPages: number — Total number of pages.
 *   - totalItems: number — Total number of filtered drugs.
 *
 * @example
 * const { paginatedDrugs, totalPages } = useDrugData({ itemsPerPage: 10 });
 */
interface UseDrugDataProps {
  itemsPerPage?: number;
}

interface UseDrugDataReturn {
  // Data
  filteredDrugs: DrugType[];
  paginatedDrugs: DrugType[];

  // Pagination State
  totalPages: number;
  totalItems: number;
}

export const useDrugData = ({
  itemsPerPage = 9,
}: UseDrugDataProps = {}): UseDrugDataReturn => {
  // getting states from GlobalContext
  const { searchValue, filter, currentPage } = useGlobalContext();

  // Memoized filtered drugs based on search and status filters
  const filteredDrugs = useMemo(() => {
    let filtered = [...mockDrugsData];

    // Apply search filter
    if (searchValue.trim()) {
      const searchLower = searchValue.toLowerCase();
      filtered = filtered.filter(
        (drug) => drug.name.toLowerCase().includes(searchLower)
        //   drug.description.toLowerCase().includes(searchLower)
        // for future incase we need to add more condition for search
      );
    }

    // Apply status filters
    if (filter.length > 0) {
      filtered = filtered.filter((drug) => filter.includes(drug.status));
    }

    return filtered;
  }, [searchValue, filter]);

  // Memoized paginated drugs
  const paginatedDrugs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredDrugs.slice(startIndex, endIndex);
  }, [filteredDrugs, currentPage, itemsPerPage]);

  // Computed values
  const totalItems = filteredDrugs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    // Data
    filteredDrugs,
    paginatedDrugs,
    totalPages,
    totalItems,
  };
};
