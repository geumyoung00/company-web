import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './page/Main'
import MainLayout from './page/roots/MainRoot'
import SubLayout from './page/roots/SubRoot'
import Greeting from './page/Info/Greeting'
import History from './page/Info/History'
import Organization from './page/Info/Organization'
import Identity from './page/Info/CompanyIdentity'
import Location from './page/Info/Location'
import SystemIntergation from './page/business/SI'
import Chart from './page/business/Chart'
import Satellite from './page/business/Satellite'
import Media from './page/business/Media'
import ResearchDevelopment from './page/business/Rnd'
import MajorPerform from './page/performance/MajorPerform'
import AllPerform from './page/performance/AllPerform'
import Welfare from './page/recruitment/Welfare'
import RecruitmentNotice from './page/recruitment/RecruitmentNotice'
import RecruitmentInfo from './page/recruitment/RecruitmentInfo'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <Main /> }],
    },
    {
      path: '/info',
      element: <SubLayout />,
      children: [
        {
          path: 'greeting',
          index: true,
          element: <Greeting />,
        },
        {
          path: 'history',
          index: true,
          element: <History />,
        },
        {
          path: 'organization',
          index: true,
          element: <Organization />,
        },
        {
          path: 'CI',
          index: true,
          element: <Identity />,
        },
        {
          path: 'location',
          index: true,
          element: <Location />,
        },
      ],
    },
    {
      path: '/business',
      element: <SubLayout />,
      children: [
        {
          path: 'si',
          index: true,
          element: <SystemIntergation />,
        },
        {
          path: 'chart',
          index: true,
          element: <Chart />,
        },
        {
          path: 'satellite',
          index: true,
          element: <Satellite />,
        },
        {
          path: 'media',
          index: true,
          element: <Media />,
        },
        {
          path: 'rnd',
          index: true,
          element: <ResearchDevelopment />,
        },
      ],
    },
    {
      path: '/performance',
      element: <SubLayout />,
      children: [
        {
          path: 'major',
          index: true,
          element: <MajorPerform />,
        },
        {
          path: 'all',
          index: true,
          element: <AllPerform />,
        },
      ],
    },
    {
      path: '/recruit',
      element: <SubLayout />,
      children: [
        {
          path: 'welfare',
          index: true,
          element: <Welfare />,
        },
        {
          path: 'recruitInfo',
          index: true,
          element: <RecruitmentInfo />,
        },
        {
          path: 'recruitNotice',
          index: true,
          element: <RecruitmentNotice />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
