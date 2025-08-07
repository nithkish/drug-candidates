"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { PaginationArrow } from "./PaginationArrow";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

/**
 * PaginationComponent
 *
 * Renders an accessible pagination UI with navigation arrows and the current page number.
 * Uses the global context to manage the current page state.
 *
 * Accessibility:
 * - The pagination is wrapped in a Paginatiion component with aria-label for screen readers.
 * - Navigation arrows have aria-labels ("Go to previous page", "Go to next page") and are disabled when not available.
 * - The current page is announced with aria-current="page".
 *
 * Props:
 * @param {number} pageCount - The total number of pages available for pagination.
 *
 * @returns {JSX.Element} The rendered pagination component.
 */
function PaginationComponent({ pageCount }: { pageCount: number }) {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <Pagination
      className="pt-4 pb-8 md:p-6"
      aria-label="Pagination Navigation"
      role="navigation"
    >
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            onClick={() => setCurrentPage(currentPage - 1)}
            isDisabled={currentPage <= 1}
            aria-label="Go to previous page"
          />
        </PaginationItem>
        <PaginationItem>
          <span
            className="p-3 mx-5 font-bold text-white bg-blue-600 dark:bg-slate-800 text-md rounded-full"
            aria-current="page"
            aria-label={`Current page, page ${currentPage}`}
            tabIndex={0}
          >
            {currentPage}
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationArrow
            direction="right"
            onClick={() => setCurrentPage(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
            aria-label="Go to next page"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
