"use client";
import DrugCard from "@/components/drug-card/DrugCard";
import { EmptyBookmarksScreen } from "@/components/error-screen/DefaultErrorScreen";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import React from "react";

function BookMarks() {
  const { bookmarksList } = useBookMarksData();

  if (bookmarksList.length === 0) return <EmptyBookmarksScreen />;
  return (
    <>
      <section className=" max-w-7xl mx-auto">
        <div className="lg:min-h-[75vh] px-5 md:p-3 md:px-16 md:py-2 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bookmarksList?.map((item) => (
            <DrugCard key={item.id} drug={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BookMarks;
