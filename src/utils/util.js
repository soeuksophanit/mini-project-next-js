import { deleteWorkspace } from "@/services/workSpaceService";

export function filterData(allData, filterBy) {
  const status = filterBy.includes("todo")
    ? 1
    : filterBy.includes("working on")
    ? 2
    : filterBy.includes("checking")
    ? 3
    : 4;
  return allData.filter((data) => data.status == status);
}

export async function deleleWS(workspaceId) {
  const req = await deleteWorkspace(workspaceId);
}
