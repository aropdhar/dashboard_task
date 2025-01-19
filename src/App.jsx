import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppMain from './pages/app/AppMain';
import Rootlayouts from './layouts/rootlayouts/Rootlayouts';


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route element={<Rootlayouts/>}>
       <Route path='/' element={<AppMain/>}/>
     </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
