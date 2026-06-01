import Board from './components/Board';
import { INITIAL_SNAKE } from './constants/board';
import './App.css';

function App() {
  return (
    <div id="app">
      <Board snake={INITIAL_SNAKE} />
    </div>
  );
}

export default App;
