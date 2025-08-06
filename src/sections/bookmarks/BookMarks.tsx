"use client";
import DrugCard from "@/components/drug-card/DrugCard";
import { EmptyBookmarksScreen } from "@/components/error-screen/DefaultErrorScreen";
import { Button } from "@/components/ui/button";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import { X } from "lucide-react";
import React from "react";

function BookMarks() {
  const { bookmarksList, clearAllBookmarks } = useBookMarksData();

  if (bookmarksList.length === 0) return <EmptyBookmarksScreen />;
  return (
    <>
      <section className=" max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-5 pb-3 md:p-3 md:px-16 md:py-2 ">
          <h1 className="text-2xl font-extrabold py-4 lg:py-2 ">
            Bookmarks List
          </h1>
          <Button
            variant={"outline"}
            className="border-spacing-3 border-blue-500 text-blue-500"
            onClick={clearAllBookmarks}
          >
            <X />
            <span className="hidden lg:inline">Clear All</span>
          </Button>
        </div>

        <div className=" px-5 pb-3 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bookmarksList?.map((item) => (
            <DrugCard key={item.id} drug={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BookMarks;
