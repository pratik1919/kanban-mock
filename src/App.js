import './App.scss';
import { NavHeader } from './components/navHeader/NavHeader';
import { StoryBoard } from './components/storyBoard/StoryBoard';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <StoryBoard />
    </div>
  );
}

export default App;