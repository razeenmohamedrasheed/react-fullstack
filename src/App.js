import 'antd/dist/reset.css';
import SideLayoutBar from './Components/SideLayoutBar/SideLayoutBar';
import Login from './Pages/Login/Login';
import { Routes, Route } from "react-router-dom"
import TodoApplication from './Pages/TodoApplication/TodoApplication';
import AccessToken from './Pages/AccessToken/AccessToken';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/pages/*" element={ <SideLayoutBar/> } >
            <Route index element={<TodoApplication />} />
            <Route  path='todo1' element={<TodoApplication />} />
            <Route path='todo2' element={<AccessToken />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
