export const initialState = {
    todos: { 
        list : [
        { name: 'First To Do', description: 'This is my first ToDo'}
        ],
        isBusy:false,
        isInit:false,
    },
    storage: {
        itemToStore: 'some value'
    },
    form: {
        condition: {
            new: true,
            used: false,
            notSpecified: false,
        },
        location: 'europe',
        cars: ['volvo', 'opel']
    }
};