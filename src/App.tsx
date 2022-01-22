
import {  useState } from "react";
import { Foooter } from "./Components/footer";
import { Header } from "./Components/header";
import { Pagination } from "./Components/Pagination";
import { Home } from "./Home";
import { Global } from "./style/Global";

function App() {
  const [currentPage,setCurrentPage] = useState(1);

  function OnHandleclicknext()
  {
    setCurrentPage(currentPage+1);
    window.scrollTo(0,0);
  }
  function OnHandleclickprevious()
  {
    if(currentPage!==1)
    {
      setCurrentPage(currentPage-1);
      window.scrollTo(0,0);
    }
   
  }

 
  return (
    <>
    <Header/>
    <Global/>
    <Home page={currentPage}/>
    <Pagination onHandleClickNext={OnHandleclicknext} onHandleClickPrev={OnHandleclickprevious}/>
    <Foooter/>
    </>
  );
}

export default App;
