import Vuex from 'vuex'
import Vue from 'vue'
import storageService from "@/services/storageService";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: storageService.init(),
        name: "todoArrTest",
        filterKey: '',
    },

    getters : {
        NAME : state => {
            return state.name
        },
        TODOS : state => {
            return state.todos;
        },
        GET_TODO_ITEM : (state) => (id) => {
            return state.todos.find((item) => item.id === Number(id) )
        }
    },

    mutations: {
        SET_TODO : (state, payload) => {
            state.todos = payload
        },
        add_todo : (state, payload) => {
            state.todos.push({title:payload, id: Date.now(), itemState: 'active'});
        },
        remove_todo : function(state, id) {
            state.todos = state.todos.filter((item) => item.id !== id );
            storageService.save_todos(state.todos)
        },
        save_todos: (state) => {
            storageService.save_todos(state.todos)
        },
    },

    actions: {

    }
});
