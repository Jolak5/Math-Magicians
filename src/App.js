import './App.css';
import {
  createBrowserRouter, Route, createRoutesFromElements, RouterProvider,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quote';
import Homepage from './components/homepage';
import NavBar from './components/navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Homepage />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quotes" element={<Quotes />} />
    </Route>,
  ),
);

function App() {
  // javascript-land
  return (
    <RouterProvider router={router} />
  );
}

export default App;
