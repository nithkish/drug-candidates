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
    <div className="px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(ITEMS_PER_PAGE)].map((e, i) => (
        <Skeleton key={i} className="h-[200px] w-[250px] rounded-xl" />
      ))}
    </div>
  );
}

export default ListSkeleton;
