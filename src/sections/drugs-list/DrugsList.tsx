"use client";
import { FilterButton } from "@/components/filter-button/FilterButton";
// import ErrorScreen from "@/components/error-screen/ErrorScreen";
import ListSkeleton from "@/components/list-skeleton/ListSkeleton";
import PaginationComponent from "@/components/pagination/Pagination";
import { SearchBar } from "@/components/search-bar/SearchBar";
// import PokemonCard from "@/components/pokemon-card/PokemonCard";
import { useGlobalContext } from "@/providers/GlobalContextProvider";
import { filterOptions } from "@/constants/filter";
import DrugCard from "@/components/drug-card/DrugCard";
import { DrugType, DrugStatusType } from "@/types/drug";
import { ITEMS_PER_PAGE } from "@/constants/api";
import { useDrugData } from "@/hooks/useDrugData";
import { NoResultsScreen } from "@/components/error-screen/DefaultErrorScreen";

/**
 * PokemonList Section Component
 *
 * This component is responsible for rendering a list of Pokémon cards.
 * It fetches the Pokémon data from the global context and displays it
 * in a responsive grid layout. Additionally, it handles loading and error
 * states and includes pagination functionality.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Pokémon list component.
 *
 * @remarks
 * - Uses `useGlobalContext` to access the Pokémon data, loading state, error state, and maximum page count.
 * - Displays a skeleton loader (`ListSkeleton`) while data is loading.
 * - Shows an error screen (`ErrorScreen`) if there is an error fetching data.
 * - Renders a grid of Pokémon cards (`PokemonCard`) when data is successfully fetched.
 * - Includes a pagination component (`PaginationComponent`) if `maxPage` is defined.
 *
 */
export default function DrugsList() {
  const { filter, setFilter, setSearchValue, setCurrentPage } =
    useGlobalContext();
  const { paginatedDrugs, totalPages, filteredDrugs } = useDrugData({
    itemsPerPage: ITEMS_PER_PAGE,
  });

  //   if (loading) return <ListSkeleton />;

  //   if (error) return <ErrorScreen />;

  const handleFilterChange = (filters: DrugStatusType[]) => {
    setFilter(filters);
    setCurrentPage(1);
  };

  return (
    <>
      <section className=" max-w-7xl mx-auto">
        <div className="flex lg:max-w-6xl lg:m-auto md:max-w-4xl  md:m-auto mx-5 py-5 gap-2">
          <SearchBar
            onSearch={(value: string) => {
              setSearchValue(value);
              setCurrentPage(1);
            }}
            containerClassName="flex-1"
            placeholder="Search by Name.."
          />
          <FilterButton
            options={filterOptions}
            selectedFilters={filter}
            onFilterChange={handleFilterChange}
            placeholder="Status"
          />
        </div>

        {paginatedDrugs.length > 0 ? (
          <div className=" px-5 pb-3 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {paginatedDrugs.map((item) => (
              <DrugCard key={item.id} drug={item} />
            ))}
          </div>
        ) : (
          <NoResultsScreen />
        )}
        {paginatedDrugs.length > 0 && filteredDrugs.length > ITEMS_PER_PAGE && (
          <PaginationComponent pageCount={totalPages} />
        )}
      </section>
    </>
  );
}
