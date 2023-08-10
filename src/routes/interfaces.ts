export type ContextProps = {
  children: React.ReactNode;
};

export type Stack = Route[][];

export type PushOptions = {
  newStack?: boolean;
};

export type RouteContextType = {
  stack: Stack;
  push: (path: string, options?: PushOptions) => void;
  goBack: (path?: string) => void;
  currentRoute: Route;
  currentStack: Route[];
};

export type Route = {
  path: string;
  title: string;
  component: any;
};

export type Routes = Record<string, Route>;
