import { Filter, RefreshCw } from "lucide-react";
import { ErrorScreen } from "./ErrorScreen";

/**
 * EmptyDrugsScreen
 *
 * Displays an accessible empty state when no drugs are available.
 * Includes an optional refresh action button.
 *
 * Props:
 * @param {() => void} [onRefresh] - Optional callback for the refresh action.
 * @param {string} [className] - Additional classes for the container.
 */
export const EmptyDrugsScreen = ({
  onRefresh,
  className,
}: {
  onRefresh?: () => void;
  className?: string;
}) => (
  <ErrorScreen
    variant="empty"
    action={
      onRefresh
        ? {
            label: "Refresh",
            onClick: onRefresh,
            icon: <RefreshCw className="h-4 w-4" />,
          }
        : undefined
    }
    className={className}
    aria-label="No drugs found. You can refresh the list."
  />
);

/**
 * NoResultsScreen
 *
 * Displays an accessible state when no search results are found.
 * Includes an optional clear filters action button.
 *
 * Props:
 * @param {() => void} [onClear] - Optional callback for the clear filters action.
 * @param {string} [className] - Additional classes for the container.
 */
export const NoResultsScreen = ({
  onClear,
  className,
}: {
  onClear?: () => void;
  className?: string;
}) => (
  <ErrorScreen
    variant="no-results"
    action={
      onClear
        ? {
            label: "Clear Filters",
            onClick: onClear,
            icon: <Filter className="h-4 w-4" />,
          }
        : undefined
    }
    className={className}
    aria-label="No results found. You can clear filters."
  />
);

/**
 * ErrorDrugsScreen
 *
 * Displays an accessible error state when loading drugs fails.
 * Includes an optional retry action button.
 *
 * Props:
 * @param {() => void} [onRetry] - Optional callback for the retry action.
 * @param {string} [className] - Additional classes for the container.
 */
export const ErrorDrugsScreen = ({
  onRetry,
  className,
}: {
  onRetry?: () => void;
  className?: string;
}) => (
  <ErrorScreen
    variant="error"
    action={
      onRetry
        ? {
            label: "Try Again",
            onClick: onRetry,
            icon: <RefreshCw className="h-4 w-4" />,
          }
        : undefined
    }
    className={className}
    aria-label="Error loading drugs. You can try again."
  />
);

/**
 * EmptyBookmarksScreen
 *
 * Displays an accessible state when no bookmarks are present.
 *
 * Props:
 * @param {string} [className] - Additional classes for the container.
 */
export const EmptyBookmarksScreen = ({ className }: { className?: string }) => (
  <ErrorScreen
    variant="no-bookmark"
    className={className}
    aria-label="No bookmarked drugs."
  />
);
