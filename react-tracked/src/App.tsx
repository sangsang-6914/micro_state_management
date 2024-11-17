import Counter2 from './components/Counter2';
import TextBox2 from './components/TextBox2';
import { Provider } from './context/StateContext2';

function App() {
  return (
    <Provider>
      <Counter2 />
      <Counter2 />
      <TextBox2 />
      <TextBox2 />
    </Provider>
  );
}

export default App;
