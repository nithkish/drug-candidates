import CardWrapper from "@/components/card-wrapper/CardWrapper";
import { render } from "@testing-library/react";

describe("CardWrapper", () => {
  it("renders the children correctly", () => {
    const { getByText } = render(
      <CardWrapper>
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("renders the title when provided", () => {
    const { getByText, getByLabelText } = render(
      <CardWrapper title="Test Header">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(getByText("Test Header")).toBeInTheDocument();
  });

  it("does not render the header when not provided", () => {
    const { queryByRole } = render(
      <CardWrapper>
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(queryByRole("heading")).not.toBeInTheDocument();
  });

  it("applies the correct class to the header", () => {
    const { getByText } = render(
      <CardWrapper title="Styled Header">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(getByText("Styled Header")).toHaveClass(
      "font-semibold leading-none tracking-tight"
    );
  });

  it("renders multiple children correctly", () => {
    const { getByText } = render(
      <CardWrapper>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardWrapper>
    );
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("handles empty children gracefully", () => {
    const { container } = render(<CardWrapper>{null}</CardWrapper>);
    expect(container).toBeInTheDocument();
  });

  it("renders a header with special characters", () => {
    const { getByText } = render(
      <CardWrapper title="Header with @#$%^&*()">
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(getByText("Header with @#$%^&*()")).toBeInTheDocument();
  });

  it("renders without crashing when no props are provided", () => {
    const { container } = render(<CardWrapper>{null}</CardWrapper>);
    expect(container).toBeInTheDocument();
  });

  it("does not apply the header class when no header is provided", () => {
    const { container } = render(
      <CardWrapper>
        <div>Test Content</div>
      </CardWrapper>
    );
    expect(container.querySelector(".text-xl.capitalize")).toBeNull();
  });
});
