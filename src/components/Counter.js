import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  const dispatch=useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show=useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const changeAmountHandler=(amount)=>{
    dispatch(counterActions.changeAmount(amount))
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
