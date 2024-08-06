import { Theme, ITheme } from "@xstyled/styled-components";

import Card from "./Card";
import { SystemStyleProps } from "@/configs/xstyled.config";
import { Image } from "@/commons/image";
import { Box, Flex } from "@/commons/box";
import { Text } from "@/commons/text";
import { BlogCardDescription } from "./Card.styled";

interface BlogCardProps<T extends ITheme = Theme> extends SystemStyleProps<T> {
  cover?: string;
  date?: string;
  title: string;
  description?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1639074784901-da4eef89268b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80";

const BlogCard = ({
  cover,
  date,
  title,
  description,
  ...props
}: BlogCardProps) => {
  const renderCover = () => {
    const coverProps = {
      w: "100%",
      h: "250px",
      mb: "4px",
      borderRadius: "md md 0 0",
    };
    if (cover) {
      return <Image src={cover} autofit {...coverProps} />;
    }

    return <Box backgroundColor="blue-gray-500" {...coverProps} />;
  };

  return (
    <Card {...props}>
      {renderCover()}
      <Flex p="8px" direction="column" gap="8px">
        {date && (
          <Text size="x-small" color="blue-gray-600" uppercase>
            {date}
          </Text>
        )}
        <Text weight="bold" size="large" ellipsis>
          {title}
        </Text>
        {description && (
          <BlogCardDescription>
            <Text size="smaller" color="gray-400">
              {description}
            </Text>
          </BlogCardDescription>
        )}
      </Flex>
    </Card>
  );
};

BlogCard.defaultProps = {
  p: "0",
  cover: DEFAULT_IMAGE,
};

export default BlogCard;
