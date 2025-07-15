import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main style={{ flex: 1, padding: '0 20px' }}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;