import { Typography, AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ToggleThemeMode from "../components/ToggleThemeMode";
import {
  useHambugerMode,
  useSetSidebarOpen,
} from "../contexts/Theme2NavContent";
import LinkIconBtn from "../components/LinkIconBtn";

const Header = () => {
  const hambugerMode = useHambugerMode();
  const setSidebarOpen = useSetSidebarOpen();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "sbBgColor" }}>
      <Toolbar color="transparent">
        <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
          Operatie Zwerfkatten
        </Typography>

        <Stack direction="row" spacing={4}>
          <Stack direction="row" spacing={0}>
            <LinkIconBtn
              tooltip={"Een email sturen naar monika.sormann@telenet.be"}
              icon={<MailOutlineIcon />}
              href={"mailto:monika.sormann@telenet.be"}
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
              tooltip={"Operatie Zwerfkatten op Facebook"}
              icon={<FacebookOutlinedIcon />}
              href={"https://nl-nl.facebook.com/groups/54131394964/"}
            />
          </Stack>
          <ToggleThemeMode />
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
