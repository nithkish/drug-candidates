/**
 * ErrorVariantType
 *
 * Enum-like union type representing the possible error or empty states
 * that can be displayed in the application.
 * - "empty": No data available.
 * - "error": A generic error occurred.
 * - "no-results": No search results found.
 * - "no-bookmark": No bookmarks have been added.
 */
export type ErrorVariantType = "empty" | "error" | "no-results" | "no-bookmark";
