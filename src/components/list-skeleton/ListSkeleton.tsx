import { Skeleton } from "@/components/ui/skeleton";
import { ITEMS_PER_PAGE } from "@/constants/api";

/**
 * @description A reusable functional React component that renders a grid of skeleton loaders. This is typically used
 *              as a placeholder while data is being fetched or loaded.
 * @returns {JSX.Element} A JSX element containing a grid of skeleton loaders.
 *
 */
function ListSkeleton() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex lg:max-w-6xl lg:m-auto md:max-w-4xl md:m-auto mx-5 py-5 gap-2">
        <Skeleton className="h-[4vh] lg:w-[69vw] w-full" />
      </div>
      <div className="px-5 pb-3 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(ITEMS_PER_PAGE)].map((e, i) => (
          <Skeleton key={i} className="h-[23vh] lg:w-[30vh] rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default ListSkeleton;
