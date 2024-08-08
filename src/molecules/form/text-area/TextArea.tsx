import { Box } from "@/commons/box";
import { SystemStyleProps } from "@/configs/xstyled.config";
import { ITheme, Theme } from "@xstyled/styled-components";
import React from "react";

interface TextareaProps<T extends ITheme = Theme>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<SystemStyleProps<T>, "color"> {}

function Textarea(props: TextareaProps) {
  return (
    <Box
      as="textarea"
      w="100%"
      borderRadius="5px"
      border="solid 1px"
      borderColor="cool-gray-300"
      p="8px"
      {...props}
    />
  );
}

export default Textarea;
