import { useTracked } from '../context/StateContext';

function TextBox() {
  const [state, setState] = useTracked();
  console.log('Text Box Rerender');
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };
  return (
    <div>
      <input
        type="text"
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TextBox;
