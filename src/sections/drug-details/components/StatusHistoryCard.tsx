"use client";
import React from "react";
import { AlertCircle, Calendar } from "lucide-react";
import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { DrugStatusHistoryEntry } from "@/types/drug";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";
import { formatDate } from "@/helpers/date";

/**
 * StatusHistoryCard
 *
 * Displays the chronological status history of a drug candidate.
 * Each entry shows the status, date, and an optional note.
 *
 * Accessibility:
 * - Uses semantic <section> and <ul>/<li> for structured, screen-reader-friendly lists.
 * - Each status entry is clearly labeled and associated with its date and note.
 * - Icons are marked aria-hidden.
 * - If no history is available, an accessible empty state is shown.
 *
 * Props:
 * @param {DrugStatusHistoryEntry[] | undefined} statusHistory - Array of status history entries.
 *
 * @returns {JSX.Element} The status history card UI.
 */
interface StatusHistoryCardProps {
  statusHistory: DrugStatusHistoryEntry[] | undefined;
}

function StatusHistoryCard({ statusHistory }: StatusHistoryCardProps) {
  const { getDrugStatusConfig } = useDrugStatusTypeMap();

  if (!statusHistory || statusHistory.length === 0) {
    return (
      <CardWrapper title="Status History">
        <div
          className="text-center text-muted-foreground py-4"
          role="status"
          aria-live="polite"
        >
          <AlertCircle
            className="h-8 w-8 mx-auto mb-2 opacity-50"
            aria-hidden="true"
          />
          <p>No status history available</p>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper title="Status History" contentClassName="pb-5">
      <section aria-label="Drug status history">
        <ul className="w-full h-full" aria-live="polite">
          {statusHistory.map((entry, index) => {
            const statusConfig = getDrugStatusConfig(entry.status);
            const isLast = index === statusHistory.length - 1;

            return (
              <li
                key={index}
                className="relative p-3"
                aria-current={isLast ? "step" : undefined}
              >
                <div className="flex items-center gap-8">
                  {/* Status Icon */}
                  <div
                    className={`w-3 h-3 rounded-full ${statusConfig.bgColor}`}
                    aria-label={statusConfig.label}
                    role="img"
                  ></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex lg:flex-row flex-col lg:items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar
                          className="h-3 w-3"
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span>{formatDate(entry.date)}</span>
                      </div>
                    </div>

                    {/* Note */}
                    {entry.note && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {entry.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div
                    className="absolute lg:top-12 top-15 w-0.5 h-8 bg-border ml-1"
                    aria-hidden="true"
                  ></div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </CardWrapper>
  );
}

export default StatusHistoryCard;
