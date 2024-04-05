import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

function App() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/check_session`).then((res) => {
        if (res.ok) {
            res.json().then((user) => setUser(user));
        }
    });
  }, []);

  function attemptLogin(userInfo) {
    fetch(`/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw res;
        })
        .then((data) => {
            setUser(data);
            // go to the home page if we log in successfully
            console.log(data)
            navigate("/");
        })
        .catch((e) => {
            alert('incorrect username or password')
            console.log(e);
        });
  }
  function logout() {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
        if (res.ok) {
            setUser(null);
        }
    });
  }

  return (
    <Container className="">
      <Container sx={{ height: '100vh'}}>
        <Typography>
          <Navbar logout={logout} user={user}/>
          <Outlet context={{ user, attemptLogin, logout }}/>
        </Typography>
      </Container>
    </Container>
  );
};

export default App;
