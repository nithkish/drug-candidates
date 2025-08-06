import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/helpers/date";

import React from "react";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CardWrapper title={"Drug Classification"} contentClassName="space-y-3">
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Category</span>
          <Badge variant="outline">{category}</Badge>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Manufacturer</span>
          <span className="font-medium">{manufacturer}</span>
        </div>
      </CardWrapper>
      <CardWrapper title={"Documentation"} contentClassName="space-y-3">
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Drug ID</span>
          <code className="text-sm bg-muted px-2 py-1 rounded">{id}</code>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Created</span>
          <span className="text-sm">{formatDate(createdAt)}</span>
        </div>
      </CardWrapper>
    </div>
  );
}

export default AdditionalInfoCard;
