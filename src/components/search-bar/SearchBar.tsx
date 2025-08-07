import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * SearchBar Component
 *
 * An accessible, debounced search input with optional clear button.
 *
 * Accessibility:
 * - The input is labeled via aria-label or aria-labelledby (defaults to "Search").
 * - The search icon is marked aria-hidden.
 * - The clear button has a visually hidden label for screen readers.
 * - The input is focusable and supports keyboard navigation.
 *
 * Props:
 * @param {function} [onSearch] - Callback fired with the search value (debounced).
 * @param {string} [placeholder] - Placeholder text for the input.
 * @param {string} [className] - Additional classes for the input.
 * @param {string} [containerClassName] - Additional classes for the container.
 * @param {boolean} [clearable] - Whether to show a clear button (default: true).
 * @param {number} [debounceMs] - Debounce delay in milliseconds (default: 300).
 * @param {any} [props] - Additional props for the input.
 */
export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  clearable?: boolean;
  debounceMs?: number;
}

export const SearchBar = ({
  className,
  containerClassName,
  onSearch,
  placeholder = "Search...",
  clearable = true,
  onChange,
  debounceMs = 300,
  ...props
}: SearchBarProps) => {
  const [value, setValue] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced search effect
  useEffect(() => {
    if (!onSearch) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, debounceMs);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(e);
  };

  const handleClear = () => {
    setValue("");
    onSearch?.("");
  };

  const hasRightButton = clearable && value;

  return (
    <div className={cn("relative", containerClassName)}>
      {/* Search icon on the left (decorative) */}
      <span
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        aria-hidden="true"
      >
        <Search className="h-4 w-4" aria-hidden="true" focusable="false" />
      </span>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "pl-9",
          "dark:bg-slate-900",
          hasRightButton && "pr-9",
          className
        )}
        aria-label={placeholder}
        role="searchbox"
        autoComplete="off"
        {...props}
      />
      {/* Clear button on the right */}
      {clearable && value && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-auto p-1 text-muted-foreground hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-3 w-3" aria-hidden="true" focusable="false" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
};
