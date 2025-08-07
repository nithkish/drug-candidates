import * as React from "react";
import { Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { FilterButtonProps } from "@/types/filter";
import { DrugStatusType } from "@/types/drug";

/**
 * FilterButton Component
 *
 * An accessible filter button with a popover for selecting filter options.
 * Displays the number of active filters and allows clearing all selections.
 *
 * Accessibility:
 * - The filter button has an aria-label and aria-haspopup for screen readers.
 * - The popover content uses role="dialog" and aria-modal.
 * - The filter options are grouped with a fieldset and legend for better semantics.
 * - Each checkbox is associated with a label via htmlFor/id.
 * - All icons are marked aria-hidden.
 *
 * Props:
 * @param {Array} options - Array of filter options ({ id, label }).
 * @param {Array} selectedFilters - Array of selected filter ids.
 * @param {Function} onFilterChange - Callback when filters change.
 * @param {string} [placeholder] - Button text.
 * @param {string} [className] - Additional classes for the button.
 * @param {any} [props] - Additional props passed to the button.
 */
export const FilterButton = ({
  options,
  selectedFilters,
  onFilterChange,
  placeholder = "Filter",
  className,
  ...props
}: FilterButtonProps) => {
  const [open, setOpen] = React.useState(false);

  const handleFilterToggle = (filterId: DrugStatusType) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter((id) => id !== filterId)
      : [...selectedFilters, filterId];
    onFilterChange(newFilters);
  };

  const handleClearAll = () => {
    onFilterChange([]);
  };

  const selectedCount = selectedFilters.length;
  const hasActiveFilters = selectedCount > 0;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "dark:bg-slate-900",
            "gap-2",
            hasActiveFilters && "bg-blue-600 text-white dark:bg-slate-700",
            className
          )}
          aria-label={
            hasActiveFilters
              ? `${selectedCount} filters applied. Open filter options`
              : "Open filter options"
          }
          aria-haspopup="dialog"
          aria-expanded={open}
          {...props}
        >
          <Filter className="h-4 w-4" focusable="false" />
          <span className="hidden lg:inline">{placeholder}</span>
          {hasActiveFilters && (
            <span
              className="ml-1 rounded-full bg-primary-foreground px-1.5 py-0.5 text-xs font-medium text-primary"
              aria-label={`${selectedCount} filters applied`}
            >
              {selectedCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-60"
        align="start"
        role="dialog"
        aria-modal="true"
        aria-label="Filter options"
      >
        <legend className="sr-only">Filter options</legend>
        <div className="flex items-center justify-between">
          <h4 className="font-medium leading-none" id="filter-options-heading">
            Filters
          </h4>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="h-auto p-1 text-xs text-muted-foreground hover:text-foreground text-blue-500"
              type="button"
              aria-label="Clear all filters"
            >
              Clear all
              <X className="h-3 w-3" aria-hidden="true" focusable="false" />
            </Button>
          )}
        </div>
        <div
          className="mt-4 space-y-3"
          role="group"
          aria-labelledby="filter-options-heading"
        >
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:dark:bg-slate-100"
                id={option.id}
                checked={selectedFilters.includes(option.id)}
                onCheckedChange={() => handleFilterToggle(option.id)}
                aria-checked={selectedFilters.includes(option.id)}
                aria-labelledby={`label-${option.id}`}
              />
              <label
                id={`label-${option.id}`}
                htmlFor={option.id}
                className="text-sm font-medium"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
