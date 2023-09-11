import './App.css';
import CountdownTimer from './CountDounTimer';
import Habits from './Habits'
import Tasks from './Tasks'

function App() {
  const targetDate = new Date("2023-09-16")
  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
      <div className='content'>
        <Habits />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
