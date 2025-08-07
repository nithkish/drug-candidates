import { renderHook } from "@testing-library/react";
import { useDrugStatusTypeMap } from "@/hooks/useDrugStatusMap";

describe("useDrugStatusTypeMap", () => {
  it("returns a drugStatusMap with correct keys and configs", () => {
    const { result } = renderHook(() => useDrugStatusTypeMap());

    const map = result.current.drugStatusMap;

    expect(Object.keys(map)).toEqual(
      expect.arrayContaining(["approved", "pending", "rejected", "in_dev"])
    );

    expect(map.approved.label).toBe("Approved");
    expect(map.approved.bgColor).toBe("bg-green-500");
    expect(map.pending.label).toBe("Pending");
    expect(map.pending.bgColor).toBe("bg-yellow-500");
    expect(map.rejected.label).toBe("Rejected");
    expect(map.rejected.bgColor).toBe("bg-red-500");
    expect(map.in_dev.label).toBe("In Development");
    expect(map.in_dev.bgColor).toBe("bg-blue-500");
  });

  it("getDrugStatusConfig returns the correct config for each status", () => {
    const { result } = renderHook(() => useDrugStatusTypeMap());

    const { getDrugStatusConfig } = result.current;

    const approvedConfig = getDrugStatusConfig("approved");
    expect(approvedConfig.label).toBe("Approved");
    expect(approvedConfig.bgColor).toBe("bg-green-500");

    const pendingConfig = getDrugStatusConfig("pending");
    expect(pendingConfig.label).toBe("Pending");
    expect(pendingConfig.bgColor).toBe("bg-yellow-500");

    const rejectedConfig = getDrugStatusConfig("rejected");
    expect(rejectedConfig.label).toBe("Rejected");
    expect(rejectedConfig.bgColor).toBe("bg-red-500");

    const inDevConfig = getDrugStatusConfig("in_dev");
    expect(inDevConfig.label).toBe("In Development");
    expect(inDevConfig.bgColor).toBe("bg-blue-500");
  });
});
