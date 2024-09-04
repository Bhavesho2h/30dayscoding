
export const initialstate = { name: 'Bhavesh', age: 23 }

export const reducer = (state, action) => {
    console.log(state.name, 'state is here');
    console.log(action, 'what is here');
    switch (action.type) {
        case 'increment_age':
            return {
                age: state.age + 1,
                name: 'Hello'
            }
        case 'decrement_age':
            return { ...state, age: state.age - 1, name: 'decrementing' }

        case 'value_change':
            return { ...state, age: 1, name: action.name }

        default:
            break;
    }
}
