import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
