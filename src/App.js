import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashaboard from "./component/dashboard/Dashboard";
import Sidebar from "./component/sidebar/Sidebar";
import AddVoters from "./component/voters/AddVoters";
import VotersList from "./component/voters/VotersList";
import Prabhak from "./component/prabhak/Prabhak";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <Routes>

          <Route path="/" element={<Dashaboard />} />
          <Route path="/add-voters" element={<AddVoters />} />
          <Route path="/voterlist" element={<VotersList />} />
          <Route path="/prabhak" element={<Prabhak />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
