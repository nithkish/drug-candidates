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
            hasActiveFilters && "bg-blue-600 text-white dark:bg-slate-500",
            className
          )}
          {...props}
        >
          <Filter className="h-4 w-4" />
          <span className="hidden lg:inline">{placeholder}</span>
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-primary-foreground px-1.5 py-0.5 text-xs font-medium text-primary">
              {selectedCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60" align="start">
        <div className="flex items-center justify-between">
          <h4 className="font-medium leading-none">Filters</h4>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="h-auto p-1 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
        <div className="mt-4 space-y-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:dark:bg-slate-100"
                id={option.id}
                checked={selectedFilters.includes(option.id)}
                onCheckedChange={() => handleFilterToggle(option.id)}
              />
              <label
                htmlFor={option.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
