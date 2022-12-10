import { Typography, AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import {
  useHambugerMode,
  useSetSidebarOpen,
} from "../contexts/HamburgerContent";
import LinkIconBtn from "../components/LinkIconBtn";

const Header = () => {
  const hambugerMode = useHambugerMode();
  const setSidebarOpen = useSetSidebarOpen();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "sbBgColor" }}>
      <Toolbar color="transparent">
        <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
          vzw Operatie Zwerfkat Oudenaarde
        </Typography>

        <Stack direction="row" spacing={4}>
          <Stack direction="row" spacing={0}>
            <LinkIconBtn
              tooltip={"Een email sturen naar bestuur@operatiezwerfkat.be"}
              icon={<MailOutlineIcon />}
              href={"mailto:bestuur@operatiezwerfkat.be"}
            />
            <LinkIconBtn
              tooltip={"Sms sturen naar Monika op +32 477 270 753"}
              icon={<SmsOutlinedIcon />}
              href={"sms:+32477270753"}
            />
            <LinkIconBtn
              tooltip={"Whatapp met Monika op +32 477 270 753"}
              icon={<WhatsAppIcon />}
              href={"https://wa.me/32477270753"}
            />
            <LinkIconBtn
              tooltip={"Operatie Zwerfkat op Facebook"}
              icon={<FacebookOutlinedIcon />}
              href={"https://nl-nl.facebook.com/groups/54131394964/"}
            />
          </Stack>
          {hambugerMode && (
            <IconButton
              color="inherit"
              onClick={() => setSidebarOpen(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
