import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import { IndexPage } from './pages/Home/Home';
import { AcessoPage } from './pages/Acesso/Acesso';
import { CadastroPage } from './pages/Cadastro/Cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/acesso', element: <AcessoPage /> },
  { path: '/cadastro', element: <CadastroPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
