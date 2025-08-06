import { useState, useMemo, useCallback } from "react";
import { DrugType } from "@/types/drug";
import { mockDrugsData } from "@/constants/drugs-list";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

interface UseDrugDataProps {
  itemsPerPage?: number;
  initialSearchTerm?: string;
  initialStatusFilters?: string[];
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
  itemsPerPage = 12,
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
