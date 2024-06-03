import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/Css/index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CompanyDaTaContextProvider from './Context/CompanyData.jsx';
const RouterStructure = () => {

  return (
  <CompanyDaTaContextProvider>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
           
            
          </Route>
        )
      )}
      />
      </CompanyDaTaContextProvider>

  );
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterStructure />
  </React.StrictMode>,
)
