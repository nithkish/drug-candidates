import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/components/search-bar/SearchBar";

// Utility to flush debounced effects
const wait = (ms = 300) => new Promise((r) => setTimeout(r, ms));

describe("SearchBar", () => {
  it("renders input with default placeholder", () => {
    render(<SearchBar />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("calls onSearch with debounced value", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} debounceMs={200} />);

    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "hello" } });

    await wait(250); // wait for debounce

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("hello");
  });

  it("updates input value and shows clear button", async () => {
    render(<SearchBar />);

    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveValue("test");
    expect(
      screen.getByRole("button", { name: /clear search/i })
    ).toBeInTheDocument();
  });

  it("clears input when clear button is clicked", async () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "clearme" } });

    const clearBtn = screen.getByRole("button", { name: /clear search/i });
    fireEvent.click(clearBtn);

    expect(input).toHaveValue("");
    expect(onSearch).toHaveBeenCalledWith(""); // Should be called with empty string
  });

  it("does not show clear button if clearable is false", async () => {
    render(<SearchBar clearable={false} />);

    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "something" } });

    expect(
      screen.queryByRole("button", { name: /clear search/i })
    ).not.toBeInTheDocument();
  });

  it("calls onChange handler if provided", async () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);

    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "abc" } });

    expect(onChange).toHaveBeenCalled();
    expect(input).toHaveValue("abc");
  });
});
