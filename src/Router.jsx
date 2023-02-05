// Imports we need for routing, provided in react-router-dom library
import { BrowserRouter, Route, Routes } from "react-router-dom";
// We have to import all components to be able to use them.
// Currently, we should only have the Dashboard component
import Dashboard from "./page/Dashboard/Dashboard";
import QuotePage from "./page/Quote/QuotePage";
import TraderAccountPage from "./page/TraderAccountPage/TraderAccountPage";
// Initialization of Router Component
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/quotes" element={<QuotePage />} />
        <Route exact path="/trader/:traderId" element={<TraderAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}
