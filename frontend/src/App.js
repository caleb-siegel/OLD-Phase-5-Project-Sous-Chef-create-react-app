import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container className="">
      <Container sx={{ height: '100vh'}}>
        <Typography>
          <Navbar />
          <Outlet />
        </Typography>
      </Container>
    </Container>
  );
}

export default App;
