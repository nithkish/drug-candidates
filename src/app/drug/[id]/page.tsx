import { EmptyDrugsScreen } from "@/components/error-screen/DefaultErrorScreen";
import { mockDrugsData } from "@/constants/drugs-list";
import { DrugDetails } from "@/sections/drug-details/DrugDetails";

/**
 * Props interface for the Drug detail page.
 *
 * @interface Props
 * @property {Object} params - An object containing route parameters.
 * @property {string} params.id - The unique identifier for a specific Drug, extracted from the route.
 */
interface Props {
  params: {
    id: string;
  };
}

function page({ params }: Props) {
  const { id } = params;
  if (!id) {
    return <EmptyDrugsScreen />;
  }

  return <DrugDetails drug={mockDrugsData.find((item) => item.id === id)} />;
}

export default page;
