import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/helpers/date";
import React from "react";

/**
 * AdditionalInfoCard
 *
 * Displays additional information about a drug candidate, including its category,
 * manufacturer, unique ID, and creation date. Information is grouped into accessible cards.
 *
 * Accessibility:
 * - Uses semantic <section> and <dl> (description list) for structured data.
 * - Each CardWrapper uses a descriptive title for screen readers.
 * - All labels and values are clearly associated.
 *
 * Props:
 * @param {string} id - Unique drug identifier.
 * @param {string} category - Drug category or class.
 * @param {string} manufacturer - Name of the manufacturer.
 * @param {string} createdAt - ISO date string for when the drug was created.
 *
 * @returns {JSX.Element} The additional info card UI.
 */
interface AdditionalInfoCardProps {
  id: string;
  category: string;
  manufacturer: string;
  createdAt: string;
}

function AdditionalInfoCard({
  category,
  manufacturer,
  id,
  createdAt,
}: AdditionalInfoCardProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      aria-label="Additional drug information"
    >
      <CardWrapper title="Drug Classification" contentClassName="space-y-3">
        <dl>
          <div className="flex justify-between py-2">
            <dt className="text-muted-foreground">Category</dt>
            <dd>
              <Badge variant="outline">{category}</Badge>
            </dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-muted-foreground">Manufacturer</dt>
            <dd className="font-medium">{manufacturer}</dd>
          </div>
        </dl>
      </CardWrapper>
      <CardWrapper title="Documentation" contentClassName="space-y-3">
        <dl>
          <div className="flex justify-between py-2">
            <dt className="text-muted-foreground">Drug ID</dt>
            <dd>
              <code className="text-sm bg-muted px-2 py-1 rounded">{id}</code>
            </dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="text-muted-foreground">Created</dt>
            <dd className="text-sm">{formatDate(createdAt)}</dd>
          </div>
        </dl>
      </CardWrapper>
    </section>
  );
}

export default AdditionalInfoCard;
