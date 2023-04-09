import { Box } from "@mantine/core";
import { TaskFilterContext, UserFilterContext } from "@/Filter";
import {
  TaskFilter,
  DisplayTaskFilters,
  UserFilter,
  DisplayUserFilters,
} from "@/Components";

export default function Home() {
  return (
    <Box>
      <TaskFilterContext.Provider>
        <TaskFilter />
        <DisplayTaskFilters />
      </TaskFilterContext.Provider>
      <UserFilterContext.Provider>
        <UserFilter />
        <DisplayUserFilters />
      </UserFilterContext.Provider>
    </Box>
  );
}
