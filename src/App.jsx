
import Conten1 from "./components/Conten";
import Navbar from "./components/Navbar";
import Content3 from "./components/Content3";
import Content2 from "./components/Content2";
import SideBar from "./components/navbar component/SideBar";



function App() {

 

  return (
    <div className=" bg-slate-50 overflow-hidden">
      
      <Navbar myFunc={()=>setbackGround(!backGround)}/>
      <Conten1/>
      <Content2/>
      <Content3/> 
    </div>
  );
}

export default App;
