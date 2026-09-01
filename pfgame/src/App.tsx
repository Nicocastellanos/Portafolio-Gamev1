import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import './css/App.css'

const Home = lazy(() => import('./pages/Home.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const AboutMe = lazy(() => import('./pages/AboutMe.tsx'));

//import individual project pages
const Novatellus = lazy(() => import('./projects/Novatellus.tsx'));

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

          <Route path="/projectos" element={
          <Suspense fallback={<Loading/>}>
          <Projects/>
          </Suspense>
         }/>

         <Route path="/sobre-mi" element={
          <Suspense fallback={<Loading/>}>
          <AboutMe/>
          </Suspense>
         }/>

         <Route path="/projectos" element={
          <Suspense fallback={<Loading/>}>
          <Projects/>
          </Suspense>
         }/>

         // Rutas para proyectos individuales
         <Route path="/Novatellus" element={
          <Suspense fallback={<Loading/>}>
          <Novatellus/>
          </Suspense>
         }/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
