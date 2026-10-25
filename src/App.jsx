
import { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './Contexts/StatesContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const About = lazy(() => import("./Pages/About/About"));
const SignUp = lazy(() => import("./Pages/SingUp/SingUp"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage/PeoductsPage"));
const ProductDetails = lazy(() => import("./Pages/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const WishList = lazy(() => import("./Pages/WishList/WishList"));
const Login = lazy(() => import("./Pages/Login/Login"));
const NotFound = lazy(() => import("./Pages/Not Found/NotFound"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const CheckOut = lazy(() => import("./Pages/CheckOut/CheckOut"));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "sing up", element: <SignUp /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <WishList /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <RouterProvider router={routes} />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
