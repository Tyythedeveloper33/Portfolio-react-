import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';

// Import components
import Welcome from './components/Welcome';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navigation from './components/navigation'; // Assuming you have this component
import Footer from './components/Footer';

// Layout component that includes the Navigation
function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet /> {/* This renders the nested route's component */}
      <Footer/>

    </div>
  );
}

// Define the router
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
    ],
  },
], { basename: '/Portfolio-react-' });

// App component that renders the RouterProvider
function App() {
  return <RouterProvider router={router} />;
}

export default App;
