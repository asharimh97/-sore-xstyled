import { Box } from "@/commons/box";
import { styled } from "@/configs/xstyled.config";
// import styled from "styled-components";

export const BlogCardDescription = styled(Box)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
