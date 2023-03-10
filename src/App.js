import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import About from "./pages/about";
import Joblist from "./components/Joblist";
import Login from "./components/Login";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Layout from "./components/Layout";
import Dashboard from "./pages/admin/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Custom404 from "./components/Custom404";
import Admin from "./pages/admin";
import User from "./pages/user";
import Track from "./pages/user/application track";
import CompleteProfil from "./components/User/Complete Profile/CompleteProfile";
import Education from "./components/User/Complete Profile/Education/Form";
import Experience from "./components/User/Complete Profile/work expereience/Form";
import Lowongan from "./pages/admin/lowongan";
import Create from "./pages/admin/lowongan/create";
import Pelamar from "./pages/admin/pelamar";
import ApplicationTracking from "./components/User/Application Tracking";
import Semua from "./pages/user/application track/semua";
import Dilihat from "./pages/user/application track/dilihat";
import Diproses from "./pages/user/application track/diproses";
import Diterima from "./pages/user/application track/diterima";
import Ditolak from "./pages/user/application track/ditolak";
import Terkirim from "./pages/user/application track/terkirim";
import Belum from "./pages/user/application track/belum";


function App() {
  const [user, setUser] = useState({
    id: "test-1",
    name: "test",
    roles: ["admin"],
  });

  const handleLogin = () =>
    setUser({
      id: "test-1",
      name: "test",
      roles: ["admin"],
    });

  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="joblist" element={<Joblist />} />
          <Route path="about" element={<About />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route
            path="admin"
            element={
              <ProtectedRoute
                redirectPath="/home"
                isAllowed={!!user && user.roles.includes("admin")}
              >
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="user"
            element={<User/>}
          >
            
          </Route>
          <Route path="completeprofile" element={<CompleteProfil/>}></Route>
          <Route path="addEducation" element={<Education/>}></Route>
          <Route path="addExperience" element={<Experience/>}></Route>
          <Route path="tracking" element={<ApplicationTracking/>}></Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lowongan" element={<Lowongan />} />
          <Route path="pelamar" element={<Pelamar />} />
          <Route path="lowongan/create" element={<Create />} />
        </Route>
        <Route path="track" element={<Track/>}>
          <Route index element={<Navigate to="semua"/>}/>
          <Route path="semua" element={<Semua/>}/>
          <Route path="dilihat" element={<Dilihat/>}/>
          <Route path="diproses" element={<Diproses/>}/>
          <Route path="diterima" element={<Diterima/>}/>
          <Route path="ditolak" element={<Ditolak/>}/>
          <Route path="terkirim" element={<Terkirim/>}/>
          <Route path="belum" element={<Belum/>}/>
        </Route>
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
