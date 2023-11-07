import './App.css';
import { ListTask } from './components/ListTask';


function App() {
  return (
  <>
    <div className="card-list">
      
      <div className='add-task'>
        <h1>Mis tareas</h1>
        <ListTask />
        
      </div>

      
    </div>
    
  </>
    
  );
}

export default App;
