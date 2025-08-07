import React from "react";
import { Separator } from "@/components/ui/separator";
import { Tag, Building, FileText } from "lucide-react";
import CardWrapper from "@/components/card-wrapper/CardWrapper";

/**
 * BasicInfoCard
 *
 * Displays basic information about a drug candidate, including its unique ID, category, and manufacturer.
 *
 * Accessibility:
 * - Uses semantic <section> and <dl> (description list) for structured data.
 * - All icons are marked aria-hidden.
 * - Labels and values are clearly associated for screen readers.
 *
 * Props:
 * @param {string} id - Unique drug identifier.
 * @param {string} category - Drug category or class.
 * @param {string} manufacturer - Name of the manufacturer.
 *
 * @returns {JSX.Element} The basic info card UI.
 */
interface BasicInfoCardProps {
  id: string;
  category: string;
  manufacturer: string;
}

function BasicInfoCard({ id, category, manufacturer }: BasicInfoCardProps) {
  return (
    <section aria-label="Basic drug information">
      <CardWrapper
        title={
          <div className="flex items-center gap-2">
            <FileText
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            />
            Basic Information
          </div>
        }
      >
        <dl className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">Drug ID</dt>
            <dd className="font-mono text-sm">{id}</dd>
          </div>
          <Separator />
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">Category</dt>
            <dd className="flex items-center gap-2">
              <Tag
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
                focusable="false"
              />
              <span>{category}</span>
            </dd>
          </div>
          <Separator />
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">Manufacturer</dt>
            <dd className="flex items-center gap-2">
              <Building
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
                focusable="false"
              />
              <span>{manufacturer}</span>
            </dd>
          </div>
        </dl>
      </CardWrapper>
    </section>
  );
}

export default BasicInfoCard;
