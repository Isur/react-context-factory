import { FC, useContext } from "react";
import { Box, Stack } from "@mantine/core";
import { JsonDisplay } from "./JsonDisplay";
import { UserFilterContext } from "@/Filter";

export const DisplayUserFilters: FC = () => {
  const { filter, order, search } = useContext(UserFilterContext.Context);

  return (
    <Box>
      <Stack align="flex-start">
        <JsonDisplay object={filter} title="Filters" />
        <JsonDisplay object={order} title="Order" />
        <JsonDisplay object={search} title="Search" />
      </Stack>
    </Box>
  );
};
