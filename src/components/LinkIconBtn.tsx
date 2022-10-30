import { PropsWithChildren } from "react";
import { IconButton, Link, Stack, Tooltip } from "@mui/material";

const LinkIconBtn = ({
  tooltip,
  icon,
  href,
  children,
}: PropsWithChildren<{ tooltip: string; icon: JSX.Element; href: string }>) => (
  <Link
    component="a"
    target="_blank"
    rel="noreferrer"
    href={href}
    underline="hover"
    variant="body1"
    color="text.primary"
    sx={{ whiteSpace: "nowrap" }}
  >
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ display: "inline" }}
    >
      <Tooltip title={tooltip}>
        <IconButton color="inherit">{icon}</IconButton>
      </Tooltip>
      {children}
    </Stack>
  </Link>
);

export default LinkIconBtn;
