import { Stack, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";
import { FC } from "react";

interface JsonDisplayProps {
  object?: Object;
  title?: string;
}

function undefinedToNull(object: Object | null) {
  if (!object) {
    return null;
  }
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      if (value === undefined) {
        return [key, null];
      }
      return [key, value];
    })
  );
}

export const JsonDisplay: FC<JsonDisplayProps> = ({ object, title }) => {
  let obj = object || null;
  if (typeof obj === "object") {
    obj = undefinedToNull(obj);
  }

  return (
    <Stack>
      <Title order={5}> {title} </Title>
      <Prism noCopy withLineNumbers language="json">
        {JSON.stringify(obj, null, 2)}
      </Prism>
    </Stack>
  );
};
