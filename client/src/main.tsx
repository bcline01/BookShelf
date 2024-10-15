import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ErrorPage from './pages/Library.tsx';
import Login from './pages/Login.tsx';
// import auth from './utils/auth.ts';
import Signup from './pages/Signup.tsx';
import Search from './pages/Search.tsx';
import BestSeller from './pages/Bestseller.tsx';
import Library from './pages/Library.tsx';
import Favorites from './pages/Favorites.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use Layout as the parent route
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />, // Login is the "home page"
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: 'bestsellers',
        element:  <BestSeller /> 
      },
      {
        path: 'favorites',
        element: <Favorites /> 
      },
      {
        path: 'library',
        element:  <Library /> 
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
