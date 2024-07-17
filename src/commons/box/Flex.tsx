import { createCss, compose, ITheme, Theme } from "@xstyled/styled-components";
import { SystemStyleProps, systemProps } from "@/configs/xstyled.config";
import {
  FlexProps as CustomFlexProps,
  flexProps as customFlexProps,
} from "@/props/flex.props";

interface FlexProps<T extends ITheme = Theme>
  extends SystemStyleProps<T>,
    CustomFlexProps<T> {}

const flexProps = compose<FlexProps>(systemProps, customFlexProps);

const { x } = createCss(flexProps);

const Flex: React.FC<FlexProps> = (props) => {
  return <x.div {...props} display="flex" />;
};

export default Flex;
