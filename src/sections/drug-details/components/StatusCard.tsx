import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Calendar } from "lucide-react";
import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { formatDate } from "@/helpers/date";

/**
 * StatusCard
 *
 * Displays the current status, creation date, and last updated date for a drug candidate.
 * Uses accessible markup and clear associations between labels and values.
 *
 * Accessibility:
 * - Uses semantic <section> and <dl> (description list) for structured data.
 * - All icons are marked aria-hidden.
 * - Labels and values are clearly associated for screen readers.
 * - The card title is associated with the content via aria-labelledby.
 *
 * Props:
 * @param {string} label - The human-readable status label.
 * @param {string} bgColor - Tailwind CSS class for the status background color.
 * @param {ReactNode} icon - Icon representing the status.
 * @param {string} createdAt - ISO date string for when the drug was created.
 * @param {string} updatedAt - ISO date string for when the drug was last updated.
 *
 * @returns {JSX.Element} The status card UI.
 */
interface StatusCardProps {
  label: string;
  bgColor: string;
  icon: ReactNode;
  createdAt: string;
  updatedAt: string;
}

function StatusCard({
  label,
  bgColor,
  icon,
  createdAt,
  updatedAt,
}: StatusCardProps) {
  const titleId = "status-card-title";
  return (
    <section aria-labelledby={titleId}>
      <CardWrapper
        title={
          <div className="flex items-center gap-2" id={titleId}>
            <AlertCircle
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            />
            Status & Timeline
          </div>
        }
      >
        <dl className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">
              Current Status
            </dt>
            <dd className="flex items-center gap-2">
              <span className="font-medium">{label}</span>
              <span className={`${bgColor} rounded-full p-1 text-white`}>
                {icon}
              </span>
            </dd>
          </div>
          <Separator />
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">Created</dt>
            <dd className="flex items-center gap-2">
              <Calendar
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
                focusable="false"
              />
              <span className="text-sm">{formatDate(createdAt)}</span>
            </dd>
          </div>
          <Separator />
          <div className="flex items-center justify-between py-1">
            <dt className="font-medium text-muted-foreground">Last Updated</dt>
            <dd className="flex items-center gap-2">
              <Calendar
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
                focusable="false"
              />
              <span className="text-sm">{formatDate(updatedAt)}</span>
            </dd>
          </div>
        </dl>
      </CardWrapper>
    </section>
  );
}

export default StatusCard;
