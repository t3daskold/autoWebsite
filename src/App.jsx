import './App.scss';
import Main from './components/Main';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./components/gallery/Gallery";


function App() {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
              <Route path={'gallery'} element={<Gallery/>}/>
          </Route>
      </Routes>
    </>

  );
}

export default App;
