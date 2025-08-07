import React from "react";
import { render, screen } from "@testing-library/react";
import { DrugDetails } from "@/sections/drug-details/DrugDetails";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";
import BasicInfoCard from "@/sections/drug-details/components/BasicInfoCard";
import StatusCard from "@/sections/drug-details/components/StatusCard";
import StatusHistoryCard from "@/sections/drug-details/components/StatusHistoryCard";
import AdditionalInfoCard from "@/sections/drug-details/components/AdditionalInfoCard";
import HeaderSection from "@/sections/drug-details/components/HeaderSection";
import { DrugType } from "@/types/drug";

jest.mock("@/hooks/useDrugStatusMap");
jest.mock("@/components/error-screen/DefaultErrorScreen", () => ({
  EmptyDrugsScreen: jest.fn(() => <div>EmptyDrugsScreen</div>),
}));
jest.mock("@/sections/drug-details/components/BasicInfoCard", () =>
  jest.fn(() => <div>BasicInfoCard</div>)
);
jest.mock("@/sections/drug-details/components/StatusCard", () =>
  jest.fn(() => <div>StatusCard</div>)
);
jest.mock("@/sections/drug-details/components/StatusHistoryCard", () =>
  jest.fn(() => <div>StatusHistoryCard</div>)
);
jest.mock("@/sections/drug-details/components/AdditionalInfoCard", () =>
  jest.fn(() => <div>AdditionalInfoCard</div>)
);
jest.mock("@/sections/drug-details/components/HeaderSection", () =>
  jest.fn(() => <div>HeaderSection</div>)
);

describe("DrugDetails", () => {
  const mockGetDrugStatusConfig = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useDrugStatusTypeMap as jest.Mock).mockReturnValue({
      getDrugStatusConfig: mockGetDrugStatusConfig,
    });
  });

  it("renders EmptyDrugsScreen when no drug prop is provided", () => {
    render(<DrugDetails />);
    expect(screen.getByText("EmptyDrugsScreen")).toBeInTheDocument();
  });

  it("renders all components with correct props when drug is provided", () => {
    const mockDrug = {
      id: "drug1",
      name: "Test Drug",
      description: "Test description",
      category: "Category A",
      manufacturer: "Manufacturer X",
      status: "approved",
      updatedAt: "2024-01-01T00:00:00Z",
      createdAt: "2023-01-01T00:00:00Z",
      statusHistory: [{ status: "pending", date: "2023-06-01" }],
    };

    const mockStatusConfig = {
      label: "Approved",
      bgColor: "bg-green-500",
      icon: <span>Icon</span>,
      description: "Drug has been approved for use",
    };

    mockGetDrugStatusConfig.mockReturnValue(mockStatusConfig);

    render(<DrugDetails drug={mockDrug as DrugType} />);

    // Verify subcomponents rendered
    expect(screen.getByText("HeaderSection")).toBeInTheDocument();
    expect(screen.getByText("BasicInfoCard")).toBeInTheDocument();
    expect(screen.getByText("StatusCard")).toBeInTheDocument();
    expect(screen.getByText("StatusHistoryCard")).toBeInTheDocument();
    expect(screen.getByText("AdditionalInfoCard")).toBeInTheDocument();

    // Verify hook called with correct status
    expect(mockGetDrugStatusConfig).toHaveBeenCalledWith(mockDrug.status);

    // Verify subcomponents called with expected props
    // Note: You can assert this only if you mock the components as jest.fn() and check calls
    // Here is an example for BasicInfoCard:
    expect(BasicInfoCard).toHaveBeenCalledWith(
      {
        id: mockDrug.id,
        category: mockDrug.category,
        manufacturer: mockDrug.manufacturer,
      },
      {}
    );

    expect(StatusCard).toHaveBeenCalledWith(
      {
        label: mockStatusConfig.label,
        updatedAt: mockDrug.updatedAt,
        createdAt: mockDrug.createdAt,
        icon: mockStatusConfig.icon,
        bgColor: mockStatusConfig.bgColor,
      },
      {}
    );

    expect(StatusHistoryCard).toHaveBeenCalledWith(
      { statusHistory: mockDrug.statusHistory },
      {}
    );

    expect(AdditionalInfoCard).toHaveBeenCalledWith(
      {
        id: mockDrug.id,
        manufacturer: mockDrug.manufacturer,
        category: mockDrug.category,
        createdAt: mockDrug.createdAt,
      },
      {}
    );

    expect(HeaderSection).toHaveBeenCalledWith(
      {
        id: mockDrug.id,
        name: mockDrug.name,
        description: mockDrug.description,
      },
      {}
    );
  });
});
