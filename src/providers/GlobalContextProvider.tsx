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
 * GlobalContextProvider is a React context provider component that supplies global state
 * and functions to its child components.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the global context.
 *
 * @returns {JSX.Element} A context provider wrapping the children components.
 *
 * @context
 * - `currentPage` (number): The current page number for paginated data.
 * - `setCurrentPage` (React.Dispatch<React.SetStateAction<number>>): Function to update the current page.
 */
export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // state to manage the current page value
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

// Custom hook to use the Global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
