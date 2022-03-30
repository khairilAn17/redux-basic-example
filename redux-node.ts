const redux = require('redux');

type TState = {
    counter: number
}

type TAction = {
    type:'INCREMENT'|'DECREMENT'
} 

const counterReducer = (state: TState = { counter : 0}, action: TAction): TState => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscribe = (): void => {
    const lateState = store.getState()
    console.log(lateState);
}

store.subscribe(counterSubscribe)

store.dispatch({type:'INCREMENT'})

store.dispatch({type:'DECREMENT'})