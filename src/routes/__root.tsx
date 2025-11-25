import { createRootRoute, Outlet } from "@tanstack/react-router";

import AppContainer from "../ui/components/AppContainer/AppContainer";
import MainHeader from "../ui/components/MainHeader/MainHeader";
import Title from "../ui/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <MainHeader>
        <Title as="text" level={2}>
          Rick&Morty App
        </Title>
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
