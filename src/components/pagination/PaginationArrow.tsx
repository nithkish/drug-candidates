import { PaginationArrowProps } from "@/types/pagination";
import { Button } from "../ui/button";

/**
 * A functional component that renders a pagination arrow button.
 *
 * @param {Object} props - The props for the PaginationArrow component.
 * @param {"left" | "right"} props.direction - The direction of the arrow, either "left" or "right".
 * @param {() => void} props.onClick - The callback function to handle the button click event.
 * @param {boolean} props.isDisabled - A flag indicating whether the button is disabled.
 *
 * @returns {JSX.Element} A button styled as a pagination arrow.
 *
 */
export const PaginationArrow = ({
  direction,
  onClick,
  isDisabled,
}: PaginationArrowProps) => {
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <Button
      onClick={onClick}
      className={`bg-gray-300 dark:bg-slate-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-slate-400 ${disabledClassName}`}
      aria-disabled={isDisabled}
      aria-label={isLeft ? "left button" : "right button"}
      disabled={isDisabled}
      data-test-id={isLeft ? "left-button" : "right-button"}
    >
      {isLeft ? "«" : "»"}
    </Button>
  );
};
