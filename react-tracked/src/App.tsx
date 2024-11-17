import { Provider } from 'react-redux';
import { store } from './context/StateContext3';
import Counter3 from './components/Counter3';
import TextBox3 from './components/TextBox3';

function App() {
  return (
    <Provider store={store}>
      <Counter3 />
      <Counter3 />
      <TextBox3 />
      <TextBox3 />
    </Provider>
  );
}

export default App;
