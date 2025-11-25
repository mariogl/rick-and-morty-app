import { createRootRoute, Outlet } from "@tanstack/react-router";

import AppContainer from "../ui/components/AppContainer/AppContainer";
import MainHeader from "../ui/components/MainHeader/MainHeader";
import Navigation from "../ui/components/Navigation/Navigation";
import Title from "../ui/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <MainHeader>
        <Title as="text" level={2} className="accent">
          Rick&Morty App
        </Title>
        <Navigation>
          <Navigation.Link to="/characters">Characters list</Navigation.Link>
        </Navigation>
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
