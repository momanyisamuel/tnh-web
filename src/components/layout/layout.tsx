import { FC } from "react";
import { Outlet } from "react-router";

type LayoutProps = object;

const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
