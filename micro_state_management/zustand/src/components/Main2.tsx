import useStore from '../store/store';

function Main2() {
  const { text, setState } = useStore();
  const changeText = () => {
    setState({ text: 'a', count: 0 });
  };

  return (
    <>
      <div>{text}</div>
      <button onClick={changeText}>change text</button>
    </>
  );
}

export default Main2;
