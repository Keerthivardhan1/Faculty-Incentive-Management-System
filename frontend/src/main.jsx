import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Patent from './pages/Patent.jsx';
import StudyLeave from './pages/StudyLeave.jsx';
import { Dashboard } from './layouts/DashBoard.jsx';
import TravellingAllowances from './pages/TravellingAllowances.jsx';
import PHD from './pages/PHD.jsx';
import Conference from './pages/Conference.jsx';
import Journal from './pages/Journal.jsx';
import Notifications from './pages/Notifications.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path: 'patent',
        element: <Patent />,
      },
      {
        path: 'studyleave',
        element : <StudyLeave/>
      },
      {
        path: 'travellingallowances',
        element : <TravellingAllowances/>
      },
      {
        path: 'phd',
        element : <PHD/>
      },
      {
        path: 'conference',
        element : <Conference/>
      },
      {
        path: 'journal',
        element : <Journal/>
      },
      {
        path:'notification',
        element: <Notifications/>
      }
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
