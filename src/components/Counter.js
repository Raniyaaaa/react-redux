import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch=useDispatch()
  const counter = useSelector(state => state.counter)
  const show=useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({ type : 'toggle'})
  };

  const incrementHandler=()=>{
    dispatch({type : 'increment'})
  }

  const decrementHandler=()=>{
    dispatch({type : 'decrement'})
  }

  const changeAmountHandler=(amount)=>{
    dispatch({type : 'changeAmount', amount: amount})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (<div className={classes.value}>{counter}</div>)}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={()=>changeAmountHandler(5)}>Increment By 5</button>
        <button onClick={()=>changeAmountHandler(-5)}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
