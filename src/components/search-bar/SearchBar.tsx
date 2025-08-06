import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
        <Search className="h-4 w-4" />
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
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
};
