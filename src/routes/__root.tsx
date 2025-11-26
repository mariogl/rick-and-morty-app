import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import type { CharacterClient } from "@app/characters/client/types";
import AppContainer from "@app/ui/components/AppContainer/AppContainer";
import MainHeader from "@app/ui/components/MainHeader/MainHeader";
import Navigation from "@app/ui/components/Navigation/Navigation";
import Title from "@app/ui/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <HeadContent />
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

interface RouterContext {
  queryClient: QueryClient;
  characterClient: CharacterClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});
