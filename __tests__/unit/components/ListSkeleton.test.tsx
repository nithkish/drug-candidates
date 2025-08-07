import { render } from "@testing-library/react";
import ListSkeleton from "@/components/list-skeleton/ListSkeleton";
import { ITEMS_PER_PAGE } from "@/constants/api";

describe("ListSkeleton", () => {
  it("renders the correct number of skeletons", () => {
    const { container } = render(<ListSkeleton />);
    const skeletons = container.getElementsByClassName(
      "h-[200px] w-[250px] rounded-xl"
    );
    expect(skeletons.length).toBe(ITEMS_PER_PAGE);
  });

  it("applies the correct grid layout classes", () => {
    const { container } = render(<ListSkeleton />);
    const gridContainer = container.firstChild;
    expect(gridContainer).toHaveClass(
      "px-16 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    );
  });

  it("renders a div as the container element", () => {
    const { container } = render(<ListSkeleton />);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("does not render any additional elements", () => {
    const { container } = render(<ListSkeleton />);
    expect(container.childElementCount).toBe(1); // Only the grid container
    const gridContainer = container.firstChild as HTMLElement;
    expect(gridContainer.childElementCount).toBe(ITEMS_PER_PAGE); // Only skeletons inside
  });
});
