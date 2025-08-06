import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Calendar } from "lucide-react";
import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { formatDate } from "@/helpers/date";

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
  return (
    <CardWrapper
      title={
        <div className="flex items-center gap-2">
          {" "}
          <AlertCircle className="h-5 w-5" />
          Status & Timeline
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">
            Current Status
          </span>
          <div className="flex items-center gap-2">
            <span className="font-medium">{label}</span>
            <div className={`${bgColor} rounded-full p-1 text-white`}>
              {icon}
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">Created</span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{formatDate(createdAt)}</span>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-medium text-muted-foreground">
            Last Updated
          </span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{formatDate(updatedAt)}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default StatusCard;
