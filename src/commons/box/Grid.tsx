import React from "react";
import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "@/configs/xstyled.config";
import {
  GridProps as CustomGridProps,
  gridProps as customGridProps,
} from "@/props/grid.props";

// Due to xstyled has its own `row` prop, which is conflicted
// with our pre-defined prop `row`, we omit the default/system
// `row` prop and replace it with our custom `row`
interface GridProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "row">,
    CustomGridProps<T> {}

const gridProps = compose<GridProps>(systemProps, customGridProps);

const { x } = createCss(gridProps);

const Grid: React.FC<GridProps> = (props) => {
  return <x.div {...props} display="grid" />;
};

export default Grid;
