"use client";
import React from "react";
import { DrugType } from "@/types/drug";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Building,
  Tag,
  FileText,
  AlertCircle,
  Bookmark,
  Flag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";
import { useBookMarksData } from "@/hooks/useBookMarksData";
import { EmptyDrugsScreen } from "@/components/error-screen/DefaultErrorScreen";
import { Button } from "@/components/ui/button";
import BasicInfoCard from "./components/BasicInfoCard";
import StatusCard from "./components/StatusCard";
import { formatDate } from "@/helpers/date";
import StatusHistoryCard from "./components/StatusHistoryCard";
import AdditionalInfoCard from "./components/AdditionalInfoCard";

interface DrugDetailsProps {
  drug?: DrugType;
}

export const DrugDetails = ({ drug }: DrugDetailsProps) => {
  const { isBookmarked, toggleBookmark } = useBookMarksData();
  const { getDrugStatusConfig } = useDrugStatusTypeMap();

  if (!drug) return <EmptyDrugsScreen />;

  const showBookmarked = isBookmarked(drug.id);
  const statusConfig = getDrugStatusConfig(drug.status);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex justify-between pb-5">
              <h1 className="text-3xl font-bold text-foreground">
                {drug.name}
              </h1>
              <div className="flex items-center gap-2">
                <Button
                  variant={"outline"}
                  className={cn(
                    "text-sm border-blue-500 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600",
                    showBookmarked && "dark:bg-slate-800 bg-blue-50"
                  )}
                  onClick={() => toggleBookmark(drug.id)}
                >
                  <Flag
                    className={cn(
                      showBookmarked && "text-red-500 fill-current"
                    )}
                  />
                  <span className="hidden lg:inline">
                    {showBookmarked ? "Bookmarked" : "Bookmark"}
                  </span>
                </Button>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{drug.description}</p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <BasicInfoCard
          id={drug.id}
          category={drug.category}
          manufacturer={drug.manufacturer}
        />

        {/* Status and Timeline */}
        <StatusCard
          label={statusConfig.label}
          updatedAt={drug.updatedAt}
          createdAt={drug.createdAt}
          icon={statusConfig.icon}
          bgColor={statusConfig.bgColor}
        />
      </div>

      {/* Status History */}
      <StatusHistoryCard statusHistory={drug.statusHistory} />

      {/* Additional Information */}
      <AdditionalInfoCard
        id={drug.id}
        manufacturer={drug.manufacturer}
        category={drug.category}
        createdAt={drug.createdAt}
      />
    </div>
  );
};
