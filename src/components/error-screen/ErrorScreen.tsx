import React from "react";
import { AlertCircle, BookMarked, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ErrorVariantType } from "@/types/error";

export interface ErrorScreenProps {
  // Content
  title?: string;
  description?: string;
  icon?: React.ReactNode;

  // Actions
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };

  // Styling
  className?: string;
  variant?: ErrorVariantType;
}

export const defaultErrorContent = {
  empty: {
    title: "No Drugs Found",
    description:
      "There are no drugs available at the moment. Please check back later.",
    icon: <AlertCircle className="h-12 w-12 text-muted-foreground" />,
  },
  error: {
    title: "Something Went Wrong",
    description:
      "We encountered an error while loading the drugs. Please try again.",
    icon: <AlertCircle className="h-12 w-12 text-destructive" />,
  },
  "no-results": {
    title: "No Results Found",
    description:
      "No drugs match your current search and filter criteria. Try adjusting your search terms or filters.",
    icon: <Search className="h-12 w-12 text-muted-foreground" />,
  },
  "no-bookmark": {
    title: "No Bookmarked Drugs.",
    description:
      "No drugs have been bookmarked yet.Please use the bookmark button in Drug details page.",
    icon: <BookMarked className="h-12 w-12 text-muted-foreground" />,
  },
};

export const ErrorScreen = ({
  title,
  description,
  icon,
  action,
  className,
  variant = "empty",
}: ErrorScreenProps) => {
  const content = defaultErrorContent[variant];

  const displayTitle = title || content.title;
  const displayDescription = description || content.description;
  const displayIcon = icon || content.icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[400px] p-8 text-center",
        className
      )}
    >
      {/* Icon */}
      <div className="mb-6">{displayIcon}</div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-foreground mb-3">
        {displayTitle}
      </h2>

      {/* Description */}
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        {displayDescription}
      </p>

      {/* Actions */}
      {action && (
        <div className="flex flex-col sm:flex-row gap-3">
          {action && (
            <Button onClick={action.onClick} className="min-w-[140px]">
              {action.icon && <span className="mr-2">{action.icon}</span>}
              {action.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
