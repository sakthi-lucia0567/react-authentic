import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import Update from "./Update";
import Password from "./Password";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh " }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/update-profile" element={<Update />} />
              <Route exact path="/password-reset" element={<Password />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
