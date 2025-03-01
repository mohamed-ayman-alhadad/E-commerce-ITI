
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Layout from './components/Layout/Layout';
import { RouterProvider } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import SingUp from './Pages/SingUp/SingUp';
import ProductsPage from './Pages/ProductsPage/PeoductsPage';
import { ThemeProvider } from './Contexts/StatesContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Cart from './Pages/Cart/Cart';
import WishList from './Pages/WishList/WishList';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Not Found/NotFound';
import Profile from './Pages/Profile/Profile';
import "bootstrap/dist/js/bootstrap.bundle.min";
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "sing up", element: <SingUp /> },
        { path: "products", element: <ProductsPage /> },
        { path: "products/:id", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element:<WishList/> },
        { path: "login", element: <Login/> },
        {path:"profile",element:<Profile/>},
        { path: "checkout", element: <CheckOut/> },
        { path: "*", element:<NotFound/> },
      ]
    }
  ])
  const queryClient = new QueryClient();
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
