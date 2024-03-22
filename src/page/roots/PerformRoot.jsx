import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PerformanceTop from '../../components/SubTop/PerformanceTop';

const PerformLayout = () => {
	return (
		<>
			<Header />
			<PerformanceTop />
			<Outlet />
		</>
	);
};
export default PerformLayout;
