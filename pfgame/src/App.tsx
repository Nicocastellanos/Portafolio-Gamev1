import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import './css/App.css'

const Home = lazy(() => import('./pages/Home.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));

import Loading from './components/Loading.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Suspense fallback={<Loading/>}>
         <Home/>
         </Suspense>
         }/>

          <Route path="/Projects" element={
          <Suspense fallback={<Loading/>}>
          <Projects/>
          </Suspense>
         }/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
