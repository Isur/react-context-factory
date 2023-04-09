import { FC, useContext } from "react";
import { Box, Group, Select, TextInput, Title } from "@mantine/core";
import { TaskFilterContext, TaskFilters, TaskOrder } from "@/Filter";

export const TaskFilter: FC = () => {
  const { filter, setFilter, setSearch, setOrder } = useContext(
    TaskFilterContext.Context
  );

  const handleChange = (name: keyof TaskFilters, value: string) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <Box>
      <Title>Task Filter</Title>
      <Group>
        <Select
          label="User"
          placeholder="Select user"
          data={[
            { label: "User 1", value: "1" },
            { label: "User 2", value: "2" },
            { label: "User 3", value: "3" },
          ]}
          onChange={(value) => handleChange("userId", value!)}
        />
        <Select
          label="Status"
          placeholder="Select status"
          data={[
            { label: "Todo", value: "todo" },
            { label: "In Progress", value: "in-progress" },
            { label: "Done", value: "done" },
          ]}
          onChange={(value) => handleChange("status", value!)}
        />
        <Select
          label="Priority"
          placeholder="Select priority"
          data={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
          ]}
          onChange={(value) => handleChange("priority", value!)}
        />
        <Select
          label="Order"
          placeholder="Select order"
          data={[
            { label: "Name", value: "name" },
            { label: "Status", value: "status" },
            { label: "Priority", value: "priority" },
          ]}
          onChange={(value) => setOrder(value! as TaskOrder)}
        />
        <TextInput
          label="Search"
          placeholder="Search by name"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Group>
    </Box>
  );
};
