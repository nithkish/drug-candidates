import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  ErrorScreen,
  defaultErrorContent,
} from "@/components/error-screen/ErrorScreen";
import { AlertTriangle } from "lucide-react";

describe("ErrorScreen", () => {
  it("renders default 'empty' variant correctly", () => {
    render(<ErrorScreen variant="empty" />);
    expect(
      screen.getByText(defaultErrorContent.empty.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultErrorContent.empty.description)
    ).toBeInTheDocument();
  });

  it("renders 'error' variant correctly", () => {
    render(<ErrorScreen variant="error" />);
    expect(
      screen.getByText(defaultErrorContent.error.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(defaultErrorContent.error.description)
    ).toBeInTheDocument();
  });

  it("renders 'no-results' variant correctly", () => {
    render(<ErrorScreen variant="no-results" />);
    expect(
      screen.getByText(defaultErrorContent["no-results"].title)
    ).toBeInTheDocument();
  });

  it("renders 'no-bookmark' variant correctly", () => {
    render(<ErrorScreen variant="no-bookmark" />);
    expect(
      screen.getByText(defaultErrorContent["no-bookmark"].title)
    ).toBeInTheDocument();
  });

  it("renders custom title, description, and icon", () => {
    render(
      <ErrorScreen
        title="Custom Title"
        description="Custom description text"
        icon={<AlertTriangle data-testid="custom-icon" />}
      />
    );

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom description text")).toBeInTheDocument();
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders and triggers action button", () => {
    const onClickMock = jest.fn();

    render(
      <ErrorScreen
        variant="error"
        action={{ label: "Retry", onClick: onClickMock }}
      />
    );

    const button = screen.getByRole("button", { name: /retry/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
