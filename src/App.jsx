import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import './App.css';

function App() {

return (
  <div className='ui container grid'>
    <div className="ui row">
      <div className="column eight wide">
        <SongList />
      </div>
      <div className="column eight wide">
        <SongDetail />
      </div>
    </div>
  </div>
  )
};

export default App;