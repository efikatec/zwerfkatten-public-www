import {
  createContext,
  useState,
  useContext,
  ReactNode,
  LazyExoticComponent,
} from "react";
import { BrowserRouter } from "react-router-dom";

interface ILazyRoutes {
  text?: string;
  path: string;
  Page: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}

const LazyRoutesContext = createContext<ILazyRoutes[]>([]);
const SetLazyRoutesContext = createContext((routes: ILazyRoutes[]) => {});

export const LazyRoutesProvider = ({
  lazyRoutes,
  children,
}: {
  lazyRoutes: ILazyRoutes[];
  children: ReactNode;
}) => {
  const [routes, setRoutes] = useState<ILazyRoutes[]>(lazyRoutes);

  return (
    <SetLazyRoutesContext.Provider value={setRoutes}>
      <LazyRoutesContext.Provider value={routes}>
        <BrowserRouter>{children}</BrowserRouter>
      </LazyRoutesContext.Provider>
    </SetLazyRoutesContext.Provider>
  );
};

export const useLazyRoutes = () => useContext(LazyRoutesContext);
export const useSetLazyRoutes = () => useContext(SetLazyRoutesContext);
