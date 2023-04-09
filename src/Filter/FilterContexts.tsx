import { FilterContextFactory } from "./FilterContextFactory";
import { TaskFilters, TaskOrder } from "./TakFilterTypes";
import { UserFilters, UserOrder } from "./UserFilterTypes";

export const TaskFilterContext = FilterContextFactory<TaskFilters, TaskOrder>(
  {
    userId: undefined,
    status: undefined,
    priority: undefined,
  },
  "name"
);
export const UserFilterContext = FilterContextFactory<UserFilters, UserOrder>(
  {
    active: undefined,
    blocked: undefined,
  },
  "name"
);
