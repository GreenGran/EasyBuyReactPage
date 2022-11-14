
import DemandTable from './componants/DemandTable';
import './App.css';
import TopContainer from './componants/TopContainer';
import HistoryToggle from './componants/HistoryToggle';


function App() {
  return (
    <div className="App" >
    <TopContainer/>
    <HistoryToggle/>
    <DemandTable/>
    
    </div>
  );
}

export default App;
