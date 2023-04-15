import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "./scenes/global/LayoutWrapper";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Properties from "./scenes/properties";
import AddProperty from "./scenes/properties/AddProperty";
import PropertyTypes from "./scenes/properties/PropertyTypes";
import theme from "./theme";
import PropertyDetails from "./scenes/properties/PropertyDetails";
import ErrorPage from "./scenes/ErrorPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import AllCustomers from "./scenes/customers";
import AllSales from "./scenes/sales";
import AddNewSale from "./scenes/sales/AddNewSale";
import CustomerDetails from "./scenes/customers/CustomerDetails";
import Dashboard from "./scenes/dashboard";
import Expenses from "./scenes/expenses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/properties",
        element: <Properties />,
      },
      { path: "/properties/add-property", element: <AddProperty /> },
      { path: "/properties/property-types", element: <PropertyTypes /> },
      { path: "/properties/:propertyId", element: <PropertyDetails /> },
      // customers
      { path: "/customers", element: <AllCustomers /> },
      { path: "/customers/:customerId", element: <CustomerDetails /> },

      { path: "/sales", element: <AllSales /> },
      { path: "/sales/new-sale", element: <AddNewSale /> },
      { path: "/expenses", element: <Expenses /> },

      // sales
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
