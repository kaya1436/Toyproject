import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Vehicle from "./pages/Vehicle";
import Layout from "./components/header/Layout";
import VehicleModel from "./pages/VehicleModel";
import Product from "./pages/Product";
import SubscriptionUser from "./pages/SubscriptionUser";
import VehicleCreate from "./pages/VehicleCreate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/vehicleModel" element={<VehicleModel />} />
        <Route path="/vehicle/create" element={<VehicleCreate />} />
        <Route path="/product" element={<Product />} />
        <Route path="/subscriptionUser" element={<SubscriptionUser />} />
      </Route>
    </Routes>
  );
}

export default App;
