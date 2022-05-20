import React from 'react';
import './App.css';

import NavbarComp from "./components/Navbar/NavbarComp";
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Reportes from './Pages/Reportes/Reportes'
import Login from './Pages/Login/Login'
import Progreso from './Pages/Progreso/Progreso'
import Perfil from './Pages/Perfil/Perfil'
import HomeAdmin from './Pages/Home/HomeAdmin'
import ReportesAdmin from './Pages/Reportes/ReportesAdmin'
import ReportesAlumAdmin from './Pages/Reportes/ReportesAlumAdmin.js'
import ReportesEdicionAdmin from './Pages/Reportes/ReportesEdicionAdmin'
import ReportesNuevoAdmin from './Pages/Reportes/ReportesNuevoAdmin'
import ProgresoAdmin from './Pages/Progreso/ProgresoAdmin'
import ProgresoAlumAdmin from './Pages/Progreso/ProgresoAdmin'
import CuestionariosAdmin from './Pages/Cuestionarios/CuestionariosAdmin'
import CuestionariosCreacionAdmin from './Pages/Cuestionarios/CuestionariosCreacionAdmin'
import CuestionariosEdicionAdmin from './Pages/Cuestionarios/CuestionariosEdicionAdmin'
import CuestionariosResponderAdmin from './Pages/Cuestionarios/CuestionariosResponderAdmin'
import PerfilEditarAdmin from './Pages/Perfil/PerfilEditarAdmin'
import PerfilCrearPerfAdmin from './Pages/Perfil/PerfilCrearPerfAdmin'










function App() {

  return (      
          
          <div className="App">
           
            <NavbarComp/>
            <div className="Contenido">
              <Routes>

                  
                 
                  
              <Route exact path="/HomeAdmin" element={<HomeAdmin/>}/>
                  {/*Aqui abajo es la pagina principal del usuario administrador*/}   



                  <Route exact path="/ReportesAdmin" element={<ReportesAdmin/>}/>
                  <Route exact path="/ReportesAlumAdmin" element={<ReportesAlumAdmin/>}/>
                  <Route exact path="/ReportesEdicionAdmin" element={<ReportesEdicionAdmin/>}/>
                  <Route exact path="/ReportesNuevoAdmin" element={<ReportesNuevoAdmin/>}/>

                  <Route exact path="/ProgresoAdmin" element={<ProgresoAdmin/>}/>
                  <Route exact path="/ProgresoAlumAdmin" element={<ProgresoAlumAdmin/>}/>

                  <Route exact path="/CuestionariosAdmin" element={<CuestionariosAdmin/>}/>
                  <Route exact path="/CuestionariosCreacionAdmin" element={<CuestionariosCreacionAdmin/>}/>
                  <Route exact path="/CuestionariosEdicionAdmin" element={<CuestionariosEdicionAdmin/>}/>
                  <Route exact path="/CuestionariosResponderAdmin" element={<CuestionariosResponderAdmin/>}/>

                 
                  
                  <Route exact path="/PerfilCrearPerfAdmin" element={<PerfilCrearPerfAdmin/>}/>
                  <Route exact path="/PerfilEditarAdmin" element={<PerfilEditarAdmin/>}/>
                
                 
                 
                  {/*Aqui abajo es la pagina principal del usuario padre*/} 
                  <Route exact path="/Login" element={<Login/>}/>
                  <Route exact path="/Home" element={<Home/>}/>
                  <Route exact path="/Reportes" element={<Reportes/>}/>
                  <Route exact path="/Progreso" element={<Progreso/>}/>
                  <Route exact path="/Perfil" element={<Perfil/>}/>
                        
              </Routes>

        
            </div> 
           
           
          </div>  
         
         
              
       

        
 
        
   
  )

}
  
export default App;