import { createHashRouter } from "react-router"; 
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import CodePage from "./pages/CodePage";
import NotFound from "./pages/NotFound"; // Import without {} since we used export default
import RobotGallery from "./pages/RobotGallery";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    // This catches the "Unexpected Application Error" and shows your gear instead
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <HomePage /> },
      { path: "team", element: <TeamPage /> },
      { path: "schedule", element: <SchedulePage /> },
      { path: "code", element: <CodePage /> },
      { path: "contact", element: <ContactPage /> },
      // This catches missing paths inside the hash system
      { path: "*", element: <NotFound /> }, 
      { path: "gallery", element: <RobotGallery /> }
    ],
  },
]);