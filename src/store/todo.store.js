import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending',
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('Init Store 🎂');
}

export default {
    initStore
}