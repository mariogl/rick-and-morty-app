import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AppContainer from "@ui/components/AppContainer/AppContainer";
import MainHeader from "@ui/components/MainHeader/MainHeader";
import Navigation from "@ui/components/Navigation/Navigation";
import Title from "@ui/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <MainHeader>
        <Title as="text" level={2} className="app-title">
          Rick&Morty App
        </Title>
        <Navigation>
          <Navigation.Link to="/characters">Character list</Navigation.Link>
        </Navigation>
      </MainHeader>
      <AppContainer>
        <main>
          <Outlet />
        </main>
      </AppContainer>
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
