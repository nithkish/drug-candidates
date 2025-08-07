import { formatDate } from "@/helpers/date";

describe("formatDate", () => {
  beforeAll(() => {
    // Set timezone to UTC for consistent test results
    process.env.TZ = "UTC";
  });

  it("formats a valid ISO date string to human-readable format", () => {
    const input = "2024-01-15T10:30:00Z";
    const result = formatDate(input);
    expect(result).toBe("January 15, 2024 at 10:30 AM");
  });

  it("formats another valid ISO date string", () => {
    const input = "2025-08-07T20:45:00Z";
    const result = formatDate(input);
    expect(result).toBe("August 7, 2025 at 09:45 PM");
  });

  it("returns 'Invalid Date' for invalid input", () => {
    const input = "invalid-date-string";
    const result = formatDate(input);
    expect(result).toBe("Invalid Date");
  });

  it("handles empty string input", () => {
    const result = formatDate("");
    expect(result).toBe("Invalid Date");
  });
});
