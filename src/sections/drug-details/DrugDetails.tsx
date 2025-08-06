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

interface DrugDetailsProps {
  drug?: DrugType;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

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
                  variant={showBookmarked ? "outline" : "ghost"}
                  className={cn(
                    "text-sm",
                    showBookmarked && "dark:bg-slate-800 bg-gray-100"
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Drug ID
                </span>
                <span className="font-mono text-sm">{drug.id}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Category
                </span>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span>{drug.category}</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Manufacturer
                </span>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{drug.manufacturer}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status and Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Status & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Current Status
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{statusConfig.label}</span>
                  <div
                    className={`${statusConfig.bgColor} rounded-full p-1 text-white`}
                  >
                    {statusConfig.icon}
                  </div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Created
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formatDate(drug.createdAt)}</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium text-muted-foreground">
                  Last Updated
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formatDate(drug.updatedAt)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Description */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {drug.description}
          </p>
        </CardContent>
      </Card>

      {/* Status History */}
      <Card>
        <CardHeader>
          <CardTitle>Status History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Approved</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDate(drug.updatedAt)}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium">In Development</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDate(drug.createdAt)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Drug Classification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Category</span>
              <Badge variant="outline">{drug.category}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Manufacturer</span>
              <span className="font-medium">{drug.manufacturer}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Drug ID</span>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                {drug.id}
              </code>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Created</span>
              <span className="text-sm">{formatDate(drug.createdAt)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
