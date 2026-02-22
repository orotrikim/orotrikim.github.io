import { createBrowserRouter } from "react-router"; 
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import CodePage from "./pages/CodePage";
import NotFound from "./pages/NotFound"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "team", element: <TeamPage /> },
      { path: "schedule", element: <SchedulePage /> },
      { path: "code", element: <CodePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFound /> }, 
    ],
  },
]);