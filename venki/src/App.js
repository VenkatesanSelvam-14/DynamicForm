
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormDesign from './Components/Form';
import UserContextProvider from './Components/Context/ContextProvider';
import UserPage from './Components/Pages/UserPage';
import AdminPage from './Components/Pages/AdminPage';


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<FormDesign/>} /> */}
            <Route path="/" element={<UserPage/>} />

            <Route path="/admin" element={<AdminPage/>} />

          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
