import { Box } from "@/commons/box";
import { SystemStyleProps } from "@/configs/xstyled.config";

export type CardProps = Omit<SystemStyleProps, "as" | "forwardedAs">;

const Card = ({ children, ...props }: CardProps) => {
  return <Box {...props}>{children}</Box>;
};

Card.defaultProps = {
  p: "8px",
  boxShadow: "sm",
  borderRadius: "md",
  border: "solid 0.5px",
  borderColor: "blue-gray-100",
};

export default Card;
