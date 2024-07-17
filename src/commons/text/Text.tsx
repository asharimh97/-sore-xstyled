import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import {
  TextProps as CustomTextProps,
  textProps as customTextProps,
} from "@/props/text.props";
import { systemProps, SystemStyleProps } from "@/configs/xstyled.config";

export interface TextProps<T extends ITheme = Theme>
  extends Omit<SystemStyleProps<T>, "size" | "height">,
    CustomTextProps<T> {}

const textProps = compose<TextProps>(systemProps, customTextProps);

const { x } = createCss(textProps);

const Text: React.FC<TextProps> = (props) => {
  return <x.p {...props} />;
};

export default Text;
