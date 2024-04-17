import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './page/main/Main'
import MainLayout from './page/roots/MainRoot'
import SubLayout from './page/roots/SubRoot'

import { Greeting, History, Organization, Location } from './page/Info/'
import { SystemIntergation, Chart, Satellite, Media, ResearchDevelopment } from './page/business'
import { MajorPerform, AllPerform, PerformDetail } from './page/performance'
import { Welfare, RecruitmentNotice, RecruitmentInfo } from './page/recruitment/'

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
        {
          path: 'all/:tab',
          index: true,
          element: <AllPerform />,
        },
        {
          path: 'all/detail/:id',
          element: <PerformDetail />,
        },
        {
          path: 'all/:tab/detail/:id',
          element: <PerformDetail />,
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
        {
          path: 'recruitNotice/:tab',
          index: true,
          element: <RecruitmentNotice />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
