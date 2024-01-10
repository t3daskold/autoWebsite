import './App.scss';
import Main from './components/Main';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/gallery/Gallery";
import Workers from "./components/Workers";
import AboutUs from "./components/AboutUs";


function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
              <Route path={'gallery'} element={<Gallery/>}/>
              <Route path={'workers'} element={<Workers/>}/>
              <Route path={'aboutUs'} element={<AboutUs/>}/>
          </Route>
      </Routes>
    </>

  );
}

export default App;
