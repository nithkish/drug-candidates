import { EmptyDrugsScreen } from "@/components/error-screen/DefaultErrorScreen";
import { mockDrugsData } from "@/constants/drugs-list";
import { DrugDetails } from "@/sections/drug-details/DrugDetails";

/**
 * Drug Detail Page
 *
 * This page displays detailed information about a specific drug candidate.
 * It retrieves the drug ID from the route parameters and fetches the corresponding drug data.
 * If no ID is provided, it shows an empty state screen.
 *
 * Accessibility:
 * - Renders an accessible empty state if the drug ID is missing.
 * - Passes the drug data to the DrugDetails component for display.
 *
 * Props:
 * @param {Object} params - Route parameters.
 * @param {string} params.id - The unique identifier for a specific drug.
 *
 * @returns {JSX.Element} The drug details page or an empty state.
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
