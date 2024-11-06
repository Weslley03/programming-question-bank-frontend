import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import { IndexPage } from './pages/Index/Index';
import { AcessoPage } from './pages/Acesso/Acesso';
import { CadastroPage } from './pages/Cadastro/Cadastro';
import { ResetPasswordPage } from './pages/ResetPassword/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/acesso', element: <AcessoPage /> },
  { path: '/cadastro', element: <CadastroPage /> },
  { path: '/reset-password', element: <ResetPasswordPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
