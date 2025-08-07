"use client";
import React from "react";
import { DrugType } from "@/types/drug";
import { Separator } from "@/components/ui/separator";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";
import { EmptyDrugsScreen } from "@/components/error-screen/DefaultErrorScreen";
import BasicInfoCard from "./components/BasicInfoCard";
import StatusCard from "./components/StatusCard";
import StatusHistoryCard from "./components/StatusHistoryCard";
import AdditionalInfoCard from "./components/AdditionalInfoCard";
import HeaderSection from "./components/HeaderSection";

/**
 * DrugDetails
 *
 * Displays detailed information about a drug candidate, including:
 * - Name and description (HeaderSection)
 * - Basic info (ID, category, manufacturer)
 * - Current status and timeline
 * - Status history (chronological)
 * - Additional info (category, manufacturer, ID, creation date)
 *
 * Accessibility:
 * - Renders an accessible empty state if no drug is provided.
 * - Uses semantic and accessible subcomponents for all sections.
 * - Each section uses appropriate ARIA roles, headings, and associations.
 *
 * Props:
 * @param {DrugType} [drug] - The drug candidate object to display details for.
 *
 * @returns {JSX.Element} The drug details UI or an empty state if no drug is provided.
 */
interface DrugDetailsProps {
  drug?: DrugType;
}

export const DrugDetails = ({ drug }: DrugDetailsProps) => {
  const { getDrugStatusConfig } = useDrugStatusTypeMap();

  if (!drug) return <EmptyDrugsScreen />;

  const statusConfig = getDrugStatusConfig(drug.status);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <HeaderSection
        id={drug.id}
        name={drug.name}
        description={drug.description}
      />

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
