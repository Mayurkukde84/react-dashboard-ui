
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Sidebar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
function App() {
  return (
    <div className="container">
     <Sidebar />
     <hr/>
     <Dashboard />
     <Rightbar />
    </div>
  );
}

export default App;
