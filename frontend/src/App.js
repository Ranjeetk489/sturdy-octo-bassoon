import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteCard from "./components/NoteCard/NoteCard";
import { Loader } from "./components/";
import { ProtectedRoute } from "./components";
import {Login,LandingPage} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<LandingPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
