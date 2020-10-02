const defaultTodos = [
    {
        id: 1,
        title: 'Купить хлеб',
        itemState: 'done'
    },
    {
        id: 2,
        title: 'Встреча с кем-то',
        itemState: 'active'
    },
    {
        id: 3,
        title: 'Посмотреть в окно',
        itemState: 'done'
    },
    {
        id: 4,
        title: 'Позвонить кому-то',
        itemState: 'active'
    },
    {
        id: 5,
        title: 'Сходить куда-то',
        itemState: 'active'
    },
]

export default {
    init() {
        if (localStorage.getItem('todos')) {
            try {
                return JSON.parse(localStorage.getItem('todos'));
            } catch(e) {
                return defaultTodos
            }
        }
        return defaultTodos
    },
    save_todos(todos) {
        const parsed = JSON.stringify(todos);
        localStorage.setItem('todos', parsed);
    }
}
