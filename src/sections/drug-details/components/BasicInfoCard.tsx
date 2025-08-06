import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tag, Building, FileText } from "lucide-react";
import { DrugType } from "@/types/drug";
import CardWrapper from "@/components/card-wrapper/CardWrapper";

interface BasicInfoCardProps {
  id: string;
  category: string;
  manufacturer: string;
}

function BasicInfoCard({ id, category, manufacturer }: BasicInfoCardProps) {
  return (
    <CardWrapper
      title={
        <div className="flex items-center gap-2">
          {" "}
          <FileText className="h-5 w-5" />
          Basic Information
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">Drug ID</span>
          <span className="font-mono text-sm">{id}</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">Category</span>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span>{category}</span>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">
            Manufacturer
          </span>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span>{manufacturer}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default BasicInfoCard;
