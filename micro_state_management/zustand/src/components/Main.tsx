import useStore from '../store/store';

function Main() {
  console.log('Main rerendering');
  const { count, inc } = useStore((state) => ({
    count: state.count,
    inc: state.inc,
  }));
  const handleIncrease = () => {
    inc();
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrease}>+</button>
    </>
  );
}

export default Main;
