import React, { useCallback, useMemo, useState } from 'react';
import { defaultRoute, notFoundRoute, routes } from './routes';
import { ContextProps, RouteContextType, Stack } from './interfaces';

export const RouteContext = React.createContext<RouteContextType | null>(null);

export const RouteProvider = ({ children }: ContextProps) => {
  const [stack, setStack] = useState<Stack>([[defaultRoute]]);

  const currentStack = useMemo(() => stack[stack.length - 1], [stack]);
  const currentRoute = useMemo(
    () => stack[stack.length - 1][currentStack.length - 1],
    [currentStack, stack]
  );

  const push = useCallback((path: string, { newStack = false } = {}) => {
    let routeToAdd = routes[path];
    if (!routeToAdd) {
      routeToAdd = notFoundRoute;
    }
    if (newStack) {
      setStack((initStack) => [...initStack, [routeToAdd]]);
    } else {
      setStack((initStack) => {
        const newStack = [...initStack];
        newStack[newStack.length - 1].push(routeToAdd);
        return newStack;
      });
    }
  }, []);

  const goBack = useCallback((path?: string) => {
    if (stack.length === 1 && currentStack.length === 1) {
      return;
    }

    if (path) {
      const index = currentStack.findIndex((route) => route.path === path);
      if (index === -1) {
        throw new Error('Route not found');
      }
      setStack((initStack) => {
        const newStack = [...initStack];
        newStack[newStack.length - 1] = newStack[newStack.length - 1].slice(
          0,
          index + 1
        );
        return newStack;
      });
      return;
    }

    setStack((initStack) => {
      const newStack = [...initStack];
      newStack[newStack.length - 1].pop();
      if (newStack[newStack.length - 1].length === 0) {
        newStack.pop();
      }
      return newStack;
    });
  }, []);

  const value = useMemo(
    () => ({ stack, push, goBack, currentRoute, currentStack }),
    [stack, push, goBack, currentRoute, currentStack]
  );

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
