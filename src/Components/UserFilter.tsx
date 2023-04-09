import { FC, useContext } from "react";
import { Box, Checkbox, Group, Select, TextInput, Title } from "@mantine/core";
import { UserFilterContext, UserFilters, UserOrder } from "@/Filter";

export const UserFilter: FC = () => {
  const { filter, setFilter, setOrder, setSearch } = useContext(
    UserFilterContext.Context
  );

  const handleChange = (name: keyof UserFilters, value: boolean) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <Box>
      <Title>User Filter</Title>
      <Group>
        <Checkbox
          label="Active"
          onChange={(event) => handleChange("active", event.target.checked)}
        />
        <Checkbox
          label="Blocked"
          onChange={(event) => handleChange("blocked", event.target.checked)}
        />
        <Select
          label="Order"
          placeholder="Select order"
          data={[
            { label: "Name", value: "name" },
            { label: "Email", value: "email" },
          ]}
          onChange={(value) => setOrder(value! as UserOrder)}
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
