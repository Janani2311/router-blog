import React from 'react'
import NavbarRouter from './components/NavbarRouter'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import All from './components/All'

function App() {
  return <>
  <div id="wrapper">

<BrowserRouter>
<NavbarRouter/>
 <Routes>
   <Route path='/' element={<All/>}></Route>
   <Route path='/full-stack' element={<Fullstack/>}></Route>
   <Route path='/data-science' element={<Datascience/>}></Route>
   <Route path='/cyber-security' element={<Cybersecurity/>}></Route>
   <Route path='/career' element={<Career/>}></Route>
   <Route path="*" element={<Navigate to='/'/>}/>
   <Route></Route>
 </Routes>
</BrowserRouter>

</div>
  
  
  
  </>
}

export default App