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
import Auth from './pages/Auth.jsx';
import CompleteForm from './forms/CompleteForm.jsx';



const FormWrapper = ({ formType }) => {
  console.log("form type in main = " , formType);
  return <CompleteForm formType={formType} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: 'patent',
        element: <FormWrapper formType="patent" />,
      },
      {
        path: 'studyleave',
        element: <FormWrapper formType="studyLeave" />,
      },
      {
        path: 'travellingallowances',
        element: <FormWrapper formType="travellingallowances" />,
      },
      {
        path: 'phd',
        element: <FormWrapper formType="phd" />,
      },
      {
        path: 'conference',
        element: <FormWrapper formType="conference" />,
      },
      {
        path: 'journal',
        element: <FormWrapper formType="journal" />,
      },
      {
        path: 'notification',
        element: <Notifications />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
