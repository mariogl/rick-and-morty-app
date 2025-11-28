import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import type { CharacterClient } from "@app/characters/client/types";
import AppContainer from "@app/ui/components/AppContainer/AppContainer";
import MainContent from "@app/ui/components/MainContent/MainContent";
import MainHeader from "@app/ui/components/MainHeader/MainHeader";
import Navigation from "@app/ui/components/Navigation/Navigation";
import Title from "@app/ui/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <HeadContent />
      <MainHeader>
        <Title as="text" level={2} className="app-title">
          <Link to="/characters">Rick&Morty App</Link>
        </Title>
        <Navigation>
          <Navigation.Link to="/characters">Character list</Navigation.Link>
        </Navigation>
      </MainHeader>
      <AppContainer>
        <MainContent>
          <Outlet />
        </MainContent>
      </AppContainer>
      <TanStackRouterDevtools />
    </>
  );
};

interface RouterContext {
  queryClient: QueryClient;
  characterClient: CharacterClient;
}

const PageNotFound = () => {
  return (
    <>
      <Title level={1} className="page-title">
        404 - Page Not Found
      </Title>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to the <Link to="/characters">character list</Link>.
      </p>
    </>
  );
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: PageNotFound,
  pendingMs: 500,
});
