/**
 * Represents the properties for a pagination component.
 *
 * @property pageCount - The total number of pages available.
 */
interface PaginationProps {
  pageCount: number;
}

/**
 * Represents the properties for a pagination arrow component.
 *
 * @property direction - The direction of the arrow, either "left" or "right".
 * @property onClick - A callback function triggered when the arrow is clicked.
 * @property isDisabled - A boolean indicating whether the arrow is disabled.
 */
interface PaginationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  isDisabled: boolean;
}
