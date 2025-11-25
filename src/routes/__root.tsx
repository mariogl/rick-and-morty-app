import { createRootRoute, Outlet } from "@tanstack/react-router";

import AppContainer from "../ui/components/AppContainer/AppContainer";
import MainHeader from "../ui/components/MainHeader/MainHeader";

const RootComponent = () => {
  return (
    <>
      <MainHeader>
        <p>Rick&Morty App</p>
      </MainHeader>
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
