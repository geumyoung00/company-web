import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BusinessTop from '../../components/SubTop/BusinessTop';

const BusinessLayout = () => {
	return (
		<>
			<Header />
			<BusinessTop />
			<Outlet />
		</>
	);
};
export default BusinessLayout;
