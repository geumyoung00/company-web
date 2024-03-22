import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BusinessTop from '../../components/SubTop/BusinessTop';
import Footer from '../../components/Footer/Footer';
import { NAV_ITEMS } from '../../components/constants';

const BusinessLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const path1 = pathname.split('/')[1];
  const path2 = pathname.split('/')[2];

  return (
    <>
      <Header />
      <BusinessTop />
      <Outlet />
      <Footer />
    </>
  );
};
export default BusinessLayout;
