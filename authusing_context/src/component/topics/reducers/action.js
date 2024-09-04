

export const handleIncrementCount = () => ({
    type: 'increment_age'
})

export const handleDecrementCount = () => ({
    type: 'decrement_age'
})

export const handleValueChange = (e) => ({
    type: 'value_change',
    name: e.target.value
})