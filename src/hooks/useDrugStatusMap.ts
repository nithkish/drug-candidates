import { useCallback, useMemo } from "react";
import { Clock, Check, X, Ellipsis } from "lucide-react";
import React from "react";
import { DrugStatusType } from "@/types/drug";

/**
 * DrugStatusTypeConfig
 *
 * Interface describing the configuration for a drug status type.
 * - label: Human-readable status label.
 * - bgColor: Tailwind CSS background color class for the status.
 * - icon: React node representing the status icon.
 * - description: Description of the status.
 */
export interface DrugStatusTypeConfig {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
  description: string;
}

/**
 * useDrugStatusTypeMap
 *
 * Custom React hook that provides a mapping from drug status types to their display configuration.
 * Useful for rendering consistent status labels, colors, and icons throughout the UI.
 *
 * Features:
 * - Memoizes the status map for performance.
 * - Provides a helper to get the config for a specific status.
 *
 * @returns {Object} {
 *   drugStatusMap: Record<DrugStatusType, DrugStatusTypeConfig>;
 *   getDrugStatusConfig: (status: DrugStatusType) => DrugStatusTypeConfig;
 * }
 *
 * Example usage:
 *   const { getDrugStatusConfig } = useDrugStatusTypeMap();
 *   const config = getDrugStatusConfig("approved");
 *   // config.label, config.bgColor, config.icon, config.description
 */
interface UseDrugStatusTypeMapReturn {
  drugStatusMap: Record<DrugStatusType, DrugStatusTypeConfig>;
  getDrugStatusConfig: (status: DrugStatusType) => DrugStatusTypeConfig;
}

export const useDrugStatusTypeMap = (): UseDrugStatusTypeMapReturn => {
  const drugStatusMap = useMemo<Record<DrugStatusType, DrugStatusTypeConfig>>(
    () => ({
      approved: {
        label: "Approved",
        bgColor: "bg-green-500",
        icon: React.createElement(Check),
        description: "Drug has been approved for use",
      },
      pending: {
        label: "Pending",
        bgColor: "bg-yellow-500",
        icon: React.createElement(Clock),
        description: "Drug is under review",
      },
      rejected: {
        label: "Rejected",
        bgColor: "bg-red-500",
        icon: React.createElement(X),
        description: "Drug has been rejected",
      },
      in_dev: {
        label: "In Development",
        bgColor: "bg-blue-500",
        icon: React.createElement(Ellipsis),
        description: "Drug is currently in development",
      },
    }),
    []
  );

  const getDrugStatusConfig = useCallback(
    (status: DrugStatusType): DrugStatusTypeConfig => {
      return drugStatusMap[status];
    },
    [drugStatusMap]
  );

  return {
    drugStatusMap,
    getDrugStatusConfig,
  };
};
