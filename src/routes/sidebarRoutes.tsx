// src/routes/index.tsx
import Activity from "../components/DummyComponents/Activity";
import Library from "../components/DummyComponents/Library";
import Security from "../components/DummyComponents/Security";
import Schedules from "../components/DummyComponents/Schedules";
import Payouts from "../components/DummyComponents/Payouts";
import Settings from "../components/DummyComponents/Settings";
import Dashboard from "../components/Dashboard/Dashboard";

// Define your routes as before
export const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/activity", element: <Activity /> },
  { path: "/library", element: <Library /> },
  { path: "/security", element: <Security /> },
  { path: "/schedules", element: <Schedules /> },
  { path: "/payouts", element: <Payouts /> },
  { path: "/settings", element: <Settings /> },
];

