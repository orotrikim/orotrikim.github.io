import { createHashRouter } from "react-router"; // 1. Swapped from createBrowserRouter
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import ContactPage from "./pages/ContactPage";

import TeamPage from "./pages/TeamPage";
import CodePage from "./pages/CodePage";

export const router = createHashRouter([ // 2. Changed to createHashRouter
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "team", element: <TeamPage /> },
      { path: "schedule", element: <SchedulePage /> },
      { path: "code", element: <CodePage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);