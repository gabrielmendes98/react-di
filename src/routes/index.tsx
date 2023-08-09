import React, { useCallback, useMemo, useState } from 'react';
import { Route, defaultRoute, notFoundRoute, routes } from './routes';

type Props = {
  children: React.ReactNode;
};

type Stack = Route[];

type RouteContextType = {
  stack: Stack;
  push: (path: string, title: string) => void;
  goBack: () => void;
  currentRoute: Route;
};

const RouteContext = React.createContext<RouteContextType | null>(null);

export const useRoute = () => {
  const context = React.useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};

export const RouteProvider = ({ children }: Props) => {
  const [stack, setStack] = useState<Stack>([defaultRoute]);

  const currentRoute = useMemo(() => stack[stack.length - 1], [stack]);

  const push = useCallback((path: string) => {
    let routeToAdd = routes[path];
    if (!routeToAdd) {
      routeToAdd = notFoundRoute;
    }
    setStack((init) => [...init, routeToAdd]);
  }, []);

  const goBack = useCallback(() => {
    setStack((init) => {
      const newStack = [...init];
      newStack.pop();
      return newStack;
    });
  }, []);

  const value = useMemo(
    () => ({ stack, push, goBack, currentRoute }),
    [stack, push, goBack, currentRoute]
  );

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
