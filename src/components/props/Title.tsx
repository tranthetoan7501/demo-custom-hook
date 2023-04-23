import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";

function Title({ children }: { children: ReactNode }) {
  return <CustomTypography>{children}</CustomTypography>;
}
const CustomTypography = styled(Typography)`
  font-size: 24px;
  color: ${theme.palette.info.main || "#ccc"};
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export default Title;
