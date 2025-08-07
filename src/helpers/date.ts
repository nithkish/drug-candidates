/**
 * formatDate
 *
 * Formats an ISO date string into a human-readable date and time string in US English locale.
 *
 * @param {string} dateString - The ISO date string to format.
 * @returns {string} The formatted date string (e.g., "January 1, 2024, 10:30 AM").
 *
 * Example:
 *   formatDate("2024-01-15T10:30:00Z"); // "January 15, 2024, 10:30 AM"
 */
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
