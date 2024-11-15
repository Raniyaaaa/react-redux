import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch=useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type : 'increment'})
  }

  const decrementHandler=()=>{
    dispatch({type : 'decrement'})
  }

  const incrementBy2Handler=()=>{
    dispatch({type : 'incrementBy5'})
  }

  const decrementBy2Handler=()=>{
    dispatch({type : 'decrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy2Handler}>Increment By 5</button>
        <button onClick={decrementBy2Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
