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
import { Check, Clock, Ellipsis, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";

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

  return (
    <Card
      onClick={handleClick}
      className="flex h-[23vh] flex-col justify-around bg-slate-50 dark:bg-slate-900 cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold">{drug.name}</CardTitle>
        <CardDescription>{drug.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p>Status: {drugStatusConfig.label}</p>
        <div
          className={`${drugStatusConfig.bgColor} text-white rounded-full p-1`}
        >
          {drugStatusConfig.icon}
        </div>
      </CardContent>
    </Card>
  );
}

export default DrugCard;
