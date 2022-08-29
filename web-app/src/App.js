import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Vehicle from "./pages/Vehicle";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/vehicle" element={<Layout />}>
        <Route index element={<Vehicle />} />
      </Route>
    </Routes>
  );
}

export default App;
