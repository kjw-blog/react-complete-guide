import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default Layout;
