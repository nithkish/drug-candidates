import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardWrapperProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  footer?: React.ReactNode;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  description,
  actions,
  children,
  className,
  contentClassName,
  footer,
}) => (
  <Card
    className={cn(
      "w-full shadow-lg bg-slate-50 dark:bg-slate-900 dark:text-gray-200",
      className
    )}
  >
    {(title || description || actions) && (
      <CardHeader className="flex flex-col gap-2 px-6 pt-6 pb-4">
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {actions && <div className="mt-2">{actions}</div>}
      </CardHeader>
    )}
    <CardContent className={cn("py-3", contentClassName)}>
      {children}
    </CardContent>
    {footer && <CardFooter>{footer}</CardFooter>}
  </Card>
);

export default CardWrapper;
