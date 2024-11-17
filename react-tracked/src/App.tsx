import Counter from './components/Counter';
import TextBox from './components/TextBox';
import { Provider } from './context/StateContext';

function App() {
  return (
    <Provider>
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </Provider>
  );
}

export default App;
