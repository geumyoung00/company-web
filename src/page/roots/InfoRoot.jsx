import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import InfoTop from '../../components/SubTop/InfoTop';
import Footer from '../../components/Footer/Footer';

const InfoLayout = () => {
	return (
		<>
			<Header />
			<InfoTop />
			<Outlet />
			<Footer />
		</>
	);
};
export default InfoLayout;
