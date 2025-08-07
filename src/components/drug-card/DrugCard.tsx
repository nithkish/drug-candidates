"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "../ui/card";
import { DrugType } from "@/types/drug";
import { useRouter } from "next/navigation";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";

/**
 * DrugCard Component
 *
 * Displays a summary card for a drug candidate, including its name, description, and status.
 * The card is interactive and accessible:
 * - Clicking or pressing Enter/Space navigates to the drug's detail page.
 * - Uses ARIA roles and labels for screen reader support.
 * - Shows a colored status icon and label.
 *
 * Props:
 * @param {DrugType} drug - The drug object containing id, name, description, and status.
 *
 * Accessibility:
 * - The card is keyboard accessible (focusable, responds to Enter/Space).
 * - Uses role="button" and aria-label for assistive technologies.
 * - Status icon is marked aria-hidden.
 */
interface DrugCardProps {
  drug: DrugType;
}

function DrugCard({ drug }: DrugCardProps) {
  const { getDrugStatusConfig } = useDrugStatusTypeMap();

  const drugStatusConfig = getDrugStatusConfig(drug.status);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/drug/${drug.id}`);
  };

  // Keyboard accessibility for card
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <Card
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${drug.name}`}
      className="flex h-[23vh] flex-col justify-around bg-slate-50 dark:bg-slate-900 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold">{drug.name}</CardTitle>
        <CardDescription>{drug.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span aria-label={`Status is ${drugStatusConfig.label}`}>
            {drugStatusConfig.label}
          </span>
        </p>
        <div
          className={`${drugStatusConfig.bgColor} text-white rounded-full p-1`}
          aria-hidden="true"
        >
          {drugStatusConfig.icon}
        </div>
      </CardContent>
    </Card>
  );
}

export default DrugCard;
