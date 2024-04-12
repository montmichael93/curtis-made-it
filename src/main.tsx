import "./index.css";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from "./error-page";
import { AboutPage } from "./routes/AboutPage";
import { MessageComponent } from "./routes/MessageComponent";
import { BuildCards } from "./routes/BuildCards";
import { FullBuildInformation } from "./routes/FullbuildInfo";
import Index from "./routes/Index";
import ReactDOM from "react-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          { index: true, element: <Index /> },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "message",
            element: <MessageComponent />,
          },
          {
            path: "videos",
            element: <BuildCards />,
          },
          {
            path: "videos/:videoId",
            element: <FullBuildInformation />,
          },
        ],
      },
    ],
  },
]);
/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Index />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="message" element={<MessageComponent />} />
      <Route path="videos" element={<BuildCards />}>
        <Route path=":videoId" element={<FullBuildInformation />} />
      </Route>
    </Route>
  )
);*/
/*
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
*/

ReactDOM.render(
  <BrowserRouter basename="https://curtismadeit-version-2.vercel.app/">
    <Toaster />
    <RouterProvider router={router} />
  </BrowserRouter>,
  document.getElementById("root")
);
