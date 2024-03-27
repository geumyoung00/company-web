import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PerformanceTop from '../../components/SubTop/PerformanceTop';
import Footer from '../../components/Footer/Footer';

const PerformLayout = () => {
	return (
		<>
			<Header />
			<PerformanceTop />
			<Outlet />
			<Footer />
		</>
	);
};
export default PerformLayout;
