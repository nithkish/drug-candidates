import { Filter, RefreshCw } from "lucide-react";
import { ErrorScreen } from "./ErrorScreen";

// Predefined error screen components for common use cases
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
  />
);

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
  />
);

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
  />
);

export const EmptyBookmarksScreen = ({ className }: { className?: string }) => (
  <ErrorScreen variant="no-bookmark" className={className} />
);
