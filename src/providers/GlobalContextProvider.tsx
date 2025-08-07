"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import { GlobalContextType } from "@/types/global";
import { DrugStatusType } from "@/types/drug";

const GlobalContext = createContext<GlobalContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
  searchValue: "",
  setSearchValue: () => {},
  filter: [],
  setFilter: () => {},
});

/**
 * GlobalContextProvider
 *
 * React context provider component that supplies global state and setter functions
 * for pagination, search, and filter functionality across the application.
 *
 * Context values provided:
 * - currentPage: number — The current page number for paginated data.
 * - setCurrentPage: (page: number) => void — Function to update the current page.
 * - searchValue: string — The current search input value.
 * - setSearchValue: (value: string) => void — Function to update the search value.
 * - filter: DrugStatusType[] — Array of selected drug status filters.
 * - setFilter: (filters: DrugStatusType[]) => void — Function to update the filters.
 *
 * @param {object} props
 * @param {ReactNode} props.children - The child components that will have access to the global context.
 * @returns {JSX.Element} A context provider wrapping the children components.
 *
 */
export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // State to manage the current page value
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<DrugStatusType[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        searchValue,
        setSearchValue,
        filter,
        setFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * useGlobalContext
 *
 * Custom hook to access the global context for pagination, search, and filter state.
 *
 * @returns {GlobalContextType} The global context value.
 *
 * @example
 * const { currentPage, setCurrentPage } = useGlobalContext();
 */
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
