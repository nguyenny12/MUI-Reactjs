import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CustomerProvider } from "./context/CustomerContext";
import Create from "./pages/create";
import Home from "./pages/home";
function App() {
  return (
    <CustomerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </CustomerProvider>
  );
}

export default App;
