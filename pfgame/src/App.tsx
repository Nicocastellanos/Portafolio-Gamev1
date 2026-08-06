import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import './css/App.css'

const Home = lazy(() => import('./pages/Home.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const AboutMe = lazy(() => import('./pages/AboutMe.tsx'));

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
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
