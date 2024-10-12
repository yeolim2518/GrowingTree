import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import SubLayout from '../components/layout/SubLayout.jsx';
import Main from '../pages/Main.jsx';
import Intro from '../pages/Intro.jsx';
import Fulfillment from '../pages/Fulfillment.jsx';
import Coupang from '../pages/Coupang.jsx';
import Cosmetics from '../pages/Cosmetics.jsx';
import ShortTerm from '../pages/ShortTerm.jsx';
import Apparel from '../pages/Apparel.jsx';
import Counseling from '../pages/Counseling.jsx';
import Estimate from '../pages/Estimate.jsx';
import Solution from '../pages/Solution.jsx';
import adminRoutes from './admin.jsx';

const routes = [
  ...adminRoutes,
  {
    path: '/',
    element: <Layout><Main /></Layout>,
  },
  // {
  //   path: '/company',
  //   element: <Navigate to="/company/company" replace />
  // },
  // {
  //   path: '/service',
  //   element: <Navigate to="/service/fulfillment" replace />
  // },
  // {
  //   path: '/solution',
  //   element: <Navigate to="/solution/solution" replace />
  // },
  // {
  //   path: '/customer',
  //   element: <Navigate to="/customer/counseling" replace />
  // },
  // {
  //   path: '/company/company',
  //   element: <SubLayout><Intro /></SubLayout>,
  // },
  // {
  //   path: '/service/fulfillment',
  //   element: <SubLayout><Fulfillment /></SubLayout>,
  // },
  // {
  //   path: '/service/coupang',
  //   element: <SubLayout><Coupang /></SubLayout>,
  // },
  // {
  //   path: '/service/cosmetics',
  //   element: <SubLayout><Cosmetics /></SubLayout>,
  // },
  // {
  //   path: '/service/short-term',
  //   element: <SubLayout><ShortTerm /></SubLayout>,
  // },
  // {
  //   path: '/service/apparel',
  //   element: <SubLayout><Apparel /></SubLayout>,
  // },
  // {
  //   path: '/solution/solution',
  //   element: <SubLayout><Solution /></SubLayout>,
  // },
  {
    path: '/customer/counseling',
    element: <SubLayout><Counseling /></SubLayout>,
  },
  // {
  //   path: '/customer/estimate',
  //   element: <SubLayout><Estimate /></SubLayout>,
  // },
];

export default routes;
