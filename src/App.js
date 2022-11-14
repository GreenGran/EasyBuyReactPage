
import DemandTable from './componants/DemandTable';
import './App.css';
import TopContainer from './componants/TopContainer';
import HistoryToggle from './componants/HistoryToggle';
import ToPDF from './componants/ToPDF';

function App() {
  return (
    <div className="App" >
    <TopContainer/>
    <ToPDF/>
 
    <DemandTable/>
    
    </div>
  );
}

export default App;
