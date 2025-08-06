"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { PaginationArrow } from "./PaginationArrow";
import { useGlobalContext } from "@/providers/GlobalContextProvider";

/**
 * PaginationComponent is a React component that renders a pagination UI
 * with navigation arrows and the current page number. It uses the global
 * context to manage the current page state.
 *
 * @param {PaginationProps} props - The props for the PaginationComponent.
 * @param {number} props.pageCount - The total number of pages available for pagination.
 *
 * @returns {JSX.Element} The rendered pagination component.
 *
 * ```
 */
function PaginationComponent({ pageCount }: PaginationProps) {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <Pagination className="pt-4 pb-8 md:p-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            direction="left"
            onClick={() => setCurrentPage(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          <span className="p-3 mx-5 font-bold text-white bg-blue-600 dark:bg-slate-800 text-md rounded-full">
            {currentPage}
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationArrow
            direction="right"
            onClick={() => setCurrentPage(currentPage + 1)}
            isDisabled={currentPage >= pageCount}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
