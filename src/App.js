import './App.css';
import GetStarted from './Components/GetStarted';
import {
  Routes,
  Route,
} from "react-router-dom";
import NewsData from "./Components/NewsData";

function App() {
  return (
    //   <Routes>
    //     <Route path="/" element={<GetStarted />}/>
    //     <Route path="/business" element={<NewsData category="business"/>}/>
    //     <Route path="/entertainment" element={<NewsData category="entertainment"/>}/>
    //     <Route path="/general" element={<NewsData category="general"/>}/>
    //     <Route path="/health" element={<NewsData category="health"/>}/>
    //     <Route path="/science" element={<NewsData category="science"/>} />
    //     <Route path="/sports" element={<NewsData category="sports"/>} />
    //     <Route path="/technology" element={<NewsData category="technology"/>} />
    // </Routes>
    <>
    <GetStarted/>
    </>
  );
}

export default App;
