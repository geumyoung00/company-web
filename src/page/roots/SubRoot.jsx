import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SubTop from '../../components/SubTop/SubTop'
import Footer from '../../components/Footer/Footer'

const SubLayout = () => {
  return (
    <>
      <Header />
      <SubTop />
      <Outlet />
      <Footer />
    </>
  )
}
export default SubLayout
