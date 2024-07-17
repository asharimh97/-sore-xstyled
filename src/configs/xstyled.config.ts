import { GeneralProps, generalProps } from "@/props/general.props";
import {
  createCss,
  system,
  compose,
  SystemProps,
  ITheme,
  Theme,
} from "@xstyled/styled-components";
import { PropsWithChildren } from "react";

export interface SystemStyleProps<T extends ITheme = Theme>
  extends SystemProps<T>,
    GeneralProps,
    PropsWithChildren {}

export const systemProps = compose<SystemStyleProps>(system, generalProps);

export const { css, styled, x, createGlobalStyle } = createCss(systemProps);
