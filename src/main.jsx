import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import { HomePage } from './pages/Home/Home';
import { AcessoPage } from './pages/Acesso/Acesso';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/acesso',
    element: <AcessoPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
