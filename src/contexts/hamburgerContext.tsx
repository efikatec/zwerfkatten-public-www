import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HambugerModeContext = createContext(false);
const SidebarOpenContext = createContext(false);
const SetSidebarOpenContext = createContext((open: boolean) => {});

export const HamburgerProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const hamburgerMode = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    hamburgerMode || setSidebarOpen(false);
  }, [hamburgerMode]);

  return (
    <HambugerModeContext.Provider value={hamburgerMode}>
      <SidebarOpenContext.Provider value={sidebarOpen}>
        <SetSidebarOpenContext.Provider value={setSidebarOpen}>
          {children}
        </SetSidebarOpenContext.Provider>
      </SidebarOpenContext.Provider>
    </HambugerModeContext.Provider>
  );
};

export const useHambugerMode = () => useContext(HambugerModeContext);
export const useSidebarOpen = () => useContext(SidebarOpenContext);
export const useSetSidebarOpen = () => useContext(SetSidebarOpenContext);
