"use client";
import { FilterButton } from "@/components/filter-button/FilterButton";
// import ErrorScreen from "@/components/error-screen/ErrorScreen";
import PaginationComponent from "@/components/pagination/Pagination";
import { SearchBar } from "@/components/search-bar/SearchBar";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { filterOptions } from "@/constants/filter";
import DrugCard from "@/components/drug-card/DrugCard";
import { DrugStatusType } from "@/types/drug";
import { ITEMS_PER_PAGE } from "@/constants/api";
import { useDrugData } from "@/hooks/useDrugData";
import { NoResultsScreen } from "@/components/error-screen/DefaultErrorScreen";

/**
 * DrugsList Section Component
 *
 * Displays a searchable, filterable, and paginated list of drug cards.
 * Handles loading, error states when used with real API and provides accessible controls for search and filtering.
 *
 * Accessibility:
 * - The main section uses role="region" and aria-label for screen readers.
 * - The drug list uses a <ul> with each card as a <li> for semantic grouping.
 * - Search and filter controls have accessible labels.
 * - Pagination is rendered only when needed.
 *
 * @component
 * @returns {JSX.Element} The rendered drug list component.
 *
 * @remarks
 * - Uses `useGlobalContext` to access filter state and setters.
 * - Uses `useDrugData` to get paginated and filtered drug data.
 * - Displays a skeleton loader (`ListSkeleton`) while data is loading.
 * - Shows an error screen (`ErrorDrugsScreen`) if there is an error fetching data.
 * - Renders a grid of drug cards (`DrugCard`) when data is successfully fetched.
 * - Includes a pagination component (`PaginationComponent`) if needed.
 */
export default function DrugsList() {
  const { filter, setFilter, setSearchValue, setCurrentPage } =
    useGlobalContext();
  const { paginatedDrugs, totalPages, filteredDrugs } = useDrugData({
    itemsPerPage: ITEMS_PER_PAGE,
  });

  //  In case of API calls the below code will be used.
  //  Commenting as we are using mockData

  //   if (loading) return <ListSkeleton />;
  //   if (error) return <ErrorDrugsScreen />;

  const handleFilterChange = (filters: DrugStatusType[]) => {
    setFilter(filters);
    setCurrentPage(1);
  };

  return (
    <section
      className="max-w-7xl mx-auto"
      role="region"
      aria-label="Drug candidates list"
    >
      <div className="flex lg:max-w-6xl lg:m-auto md:max-w-4xl md:m-auto mx-5 py-5 gap-2">
        <SearchBar
          onSearch={(value: string) => {
            setSearchValue(value);
            setCurrentPage(1);
          }}
          containerClassName="flex-1"
          placeholder="Search by Name.."
          aria-label="Search drugs by name"
        />
        <FilterButton
          options={filterOptions}
          selectedFilters={filter}
          onFilterChange={handleFilterChange}
          placeholder="Status"
          aria-label="Filter drugs by status"
        />
      </div>

      {paginatedDrugs.length > 0 ? (
        <ul
          className="px-5 pb-3 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Drug candidates"
        >
          {paginatedDrugs.map((item, index) => (
            <li key={index}>
              <DrugCard drug={item} />
            </li>
          ))}
        </ul>
      ) : (
        <NoResultsScreen />
      )}
      {paginatedDrugs.length > 0 && filteredDrugs.length > ITEMS_PER_PAGE && (
        <PaginationComponent pageCount={totalPages} />
      )}
    </section>
  );
}
