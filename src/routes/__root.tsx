import { createRootRoute, Outlet } from "@tanstack/react-router";

const RootComponent = () => {
  return (
    <>
      <p>Rick&Morty App</p>
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
