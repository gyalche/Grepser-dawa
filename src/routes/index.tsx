import { createBrowserRouter } from 'react-router-dom';
import CreditUsage from '../Pages/credituse';
import DataSets from '../Pages/datasets';
import WorkFlows from '../Pages/workflows';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DataSets />,
  },
  {
    path: '/workflow',
    element: <WorkFlows />,
  },
  {
    path: '/credit',
    element: <CreditUsage />,
  },
]);

export default router;
