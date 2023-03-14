import { Routes, Route, Outlet } from 'react-router-dom';

import { Header, Navbar, Main, Footer } from '../layouts';
import { Home, Gorilla } from '../pages/';

const SidebarLayout: React.FC = () => {
  return (
  <>
    <Header isVisible={true}>
      <Navbar />
    </Header>
    <Outlet />
    <Footer />
  </>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<SidebarLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/gorilla' element={<Gorilla />} />
      </Route>
      {/* <Route path='/youtube' element={<SidebarLayout />}> */}
    </Routes>
  );
};

export default Router;
