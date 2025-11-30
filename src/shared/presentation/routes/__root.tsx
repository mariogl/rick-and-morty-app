import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
} from "@tanstack/react-router";

import type { CharacterClient } from "@app/character/domain/CharacterClient";
import AppContainer from "@app/shared/presentation/components/AppContainer/AppContainer";
import MainContent from "@app/shared/presentation/components/MainContent/MainContent";
import MainHeader from "@app/shared/presentation/components/MainHeader/MainHeader";
import Navigation from "@app/shared/presentation/components/Navigation/Navigation";
import Title from "@app/shared/presentation/components/Title/Title";

const RootComponent = () => {
  return (
    <>
      <HeadContent />
      <MainHeader>
        <Title as="text" level={2} className="app-title">
          <Link to="/characters">Rick&Morty App</Link>
        </Title>
        <Navigation>
          <Link
            to="/characters"
            activeOptions={{ exact: true, includeSearch: false }}
          >
            Character list
          </Link>
        </Navigation>
      </MainHeader>
      <AppContainer>
        <MainContent>
          <Outlet />
        </MainContent>
      </AppContainer>
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
