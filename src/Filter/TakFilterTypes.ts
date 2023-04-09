export type TaskFilters = {
  userId?: string;
  status?: "todo" | "in-progress" | "done";
  priority?: "1" | "2" | "3" | "4" | "5";
};
export type TaskOrder = "name" | "status" | "priority";
