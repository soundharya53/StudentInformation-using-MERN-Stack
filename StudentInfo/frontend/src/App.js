import {react} from 'react';
import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import DeleteDetail from "./pages/DeleteDetail";
import EditDetail from "./pages/EditDetail";
import SearchDetail from "./pages/SearchDetail";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/regs/create' element={<Create/>}/>
      <Route path='/regs/search/:id' element={<SearchDetail/>}/>
      <Route path='/regs/edit/:id' element={<EditDetail/>}/>
      <Route path='/regs/delete/:id' element={<DeleteDetail/>}/>

    </Routes>
  );
}

export default App;
