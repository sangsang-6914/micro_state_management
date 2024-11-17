import Counter from './components/Counter';
import { StateProvider } from './context/StateContext';

function App() {
  return (
    <StateProvider>
      <Counter />
    </StateProvider>
  );
}

export default App;
