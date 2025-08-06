import { useCallback, useMemo } from "react";
import {
  CheckCircle,
  Clock,
  XCircle,
  MoreHorizontal,
  Check,
  X,
  Ellipsis,
} from "lucide-react";
import React from "react";
import { DrugStatusType } from "@/types/drug";

export interface DrugStatusTypeConfig {
  label: string;
  bgColor: string;
  icon: React.ReactNode;
  description: string;
}

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
