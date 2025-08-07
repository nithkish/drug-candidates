import { Button } from "@/components/ui/button";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import { cn } from "@/lib/utils";
import { Flag } from "lucide-react";
import React from "react";

/**
 * HeaderSection
 *
 * Displays the drug candidate's name, description, and a bookmark toggle button.
 *
 * Accessibility:
 * - The drug name uses an <h1> for page structure.
 * - The bookmark button has an accessible aria-label that updates based on state.
 * - The bookmark icon is marked aria-hidden.
 *
 * Props:
 * @param {string} name - The drug's display name.
 * @param {string} id - The unique drug identifier.
 * @param {string} description - The drug's description.
 *
 * @returns {JSX.Element} The header section UI.
 */
interface HeaderSectionProps {
  name: string;
  id: string;
  description: string;
}

function HeaderSection({ name, id, description }: HeaderSectionProps) {
  const { isBookmarked, toggleBookmark } = useBookMarksData();

  const showBookmarked = isBookmarked(id);

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2 w-full">
          <div className="flex justify-between pb-5">
            <h1
              className="text-3xl font-bold text-foreground"
              id={`drug-title-${id}`}
            >
              {name}
            </h1>
            <div className="flex items-center gap-2">
              <Button
                variant={"outline"}
                className={cn(
                  "text-sm border-blue-500 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600",
                  showBookmarked && "dark:bg-slate-800 bg-gray-50"
                )}
                onClick={() => toggleBookmark(id)}
                aria-label={
                  showBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
                }
                aria-pressed={showBookmarked}
              >
                <Flag
                  className={cn(showBookmarked && "text-red-500 fill-current")}
                  aria-hidden="true"
                  focusable="false"
                />
                <span className="hidden lg:inline">
                  {showBookmarked ? "Bookmarked" : "Bookmark"}
                </span>
              </Button>
            </div>
          </div>
          <p className="text-lg text-muted-foreground" aria-live="polite">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
