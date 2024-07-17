import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "@/configs/xstyled.config";
import {
  TagProps as CustomTagProps,
  tagProps as customTagProps,
} from "@/props/tag.props";
import { tagColors } from "@/lib/constants";
import { generateFontColor } from "@/utils/color";

export interface TagProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "color" | "size">,
    CustomTagProps {
  rounded?: boolean;
}

const tagProps = compose<TagProps>(systemProps, customTagProps);

const { x, styled, css } = createCss(tagProps);

const TagWrapper = styled(x.span)<TagProps>`
  background-color: cool-gray-50;
  border: solid 1px;
  border-color: cool-gray-700;
  border-radius: 3px;
  color: cool-gray-700;
  display: inline-flex;
  margin-right: 4px;
  font-size: 13px;
  padding: 3px 6px;

  &:last-child {
    margin-right: 0;
  }

  ${({ rounded }) =>
    rounded &&
    css({
      borderRadius: "9999px",
      padding: "3px 8px",
    })}

  // implement coloring
  ${({ color }) =>
    color &&
    css({
      backgroundColor: tagColors[color]?.bg || color,
      borderColor: tagColors[color]?.fg || color,
      color: tagColors[color]?.fg || generateFontColor(color),
    })}

  ${({ size, rounded }) =>
    size === "small" &&
    css({
      fontSize: "11px",
      padding: rounded ? "2px 6px" : "2px 4px",
    })}

  ${({ size, rounded }) =>
    size === "large" &&
    css({
      fontSize: "15px",
      padding: rounded ? "4px 10px" : "4px 8px",
    })}
`;

const IconWrapper = styled(x.span)`
  margin-right: 4px;
  margin-bottom: 0px;
`;

const Tag: React.FC<TagProps> = ({ icon, children, ...props }) => {
  const renderIcon = () => {
    if (icon) {
      return <IconWrapper>{icon}</IconWrapper>;
    }

    return null;
  };

  return (
    <TagWrapper {...props}>
      {renderIcon()}
      {children}
    </TagWrapper>
  );
};

export default Tag;
