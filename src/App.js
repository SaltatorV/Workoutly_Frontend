import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import PanelPage from "./pages/Panel";
import AccountActivationPage from "./pages/AccountActivation";
import MainNavigation from "./components/navigation/MainNavigation";
import UserNavigation from "./components/navigation/UserNavigation";
import AccountSettingsPage, {
  userProfileLoader,
} from "./pages/AccountSettings";

import {
  isAuthenticatedLoader,
  isLogged,
} from "./services/AuthenticationService";

import { action as logoutAction } from "./pages/Logout";

import "bootstrap/dist/css/bootstrap.min.css";
import MeasurementsPage, { measurementsLoader } from "./pages/Measurements";
import RoutinesPage, { routinesLoader } from "./pages/Routines";
import ErrorPage from "./pages/Error";
import { loaderSummaryWeightChart } from "./components/panel/SummaryDashboard";
import NewWorkoutPlan, { exerciseLoader } from "./pages/NewWorkoutPlan";
import RoutineSettings from "./pages/RoutineSettings";
import NewWorkout, { NewWorkoutLoader } from "./pages/NewWorkout";
import AddWorkoutLog, { workoutPlansLoader } from "./pages/AddWorkoutLog";
import HistoryPage, { historyLoader } from "./pages/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: isLogged,
      },

      {
        path: "/activate",
        element: <AccountActivationPage />,
      },
    ],
  },
  {
    path: "/panel",
    element: <UserNavigation />,
    loader: isAuthenticatedLoader,
    children: [
      {
        index: true,
        element: <PanelPage />,
        loader: loaderSummaryWeightChart,
      },
      {
        path: "Account",
        element: <AccountSettingsPage />,
        errorElement: ErrorPage,
        loader: userProfileLoader,
      },
      {
        path: "Measurements",
        element: <MeasurementsPage />,
        loader: measurementsLoader,
      },
      {
        path: "Routines",
        element: <RoutinesPage />,
        loader: routinesLoader,
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "new-workout-plan",
        element: <NewWorkoutPlan />,
        loader: exerciseLoader,
      },
      {
        path: "routine-settings",
        element: <RoutineSettings />,
      },
      {
        path: "new-workout",
        element: <NewWorkout />,
        loader: NewWorkoutLoader,
      },
      {
        path: "add-workout-log",
        element: <AddWorkoutLog />,
        loader: workoutPlansLoader,
      },
      {
        path: "history",
        element: <HistoryPage />,
        loader: historyLoader,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
