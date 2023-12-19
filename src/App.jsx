import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
