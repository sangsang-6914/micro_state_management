import { useTrackedState, useUpdate } from '../context/StateContext';

function TextBox() {
  const { text } = useTrackedState();
  const setState = useUpdate();
  console.log('TextBox Rendering');
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TextBox;
