import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Datasets from "../components/DatasetsComp";
import DataSets from "../Pages/datasets";
import WorkFlows from "../Pages/workflows";
import CreditUsage from "../Pages/credituse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DataSets />
  },
  {
    path: "/workflow",
    element: <WorkFlows />
  },
  {
    path: "/credit",
    element: <CreditUsage />
  },
]);

export default router;