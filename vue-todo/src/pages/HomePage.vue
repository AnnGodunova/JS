<template>
    <div class="home-page base-page">
        <CreateTodo @todo-created="onTodoCreated"/>
        <div class="separator"> <hr></div>
        <ul class="todo-list">
            <TodoItem 
                v-for="todoItem in todoList" 
                :key="todoItem.id"
                class="todo-item"
                :id="todoItem.id"
                :title="todoItem.title"
                :isCompleted="todoItem.isCompleted"
                @todo-patched="onTodoPatched"
                @todo-deleted="onTodoDeleted"
            />
        </ul>
    </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo'
import TodoItem from '@/components/TodoItem'
import {fetchTodoList} from '@/netClient/todoService';

    
export default{
    name: 'HomePage',
    components: {
        CreateTodo,
        TodoItem
    }  , 
    props: {
        id: String,
        title: String,
        isCompleted: Boolean,
    },
    data: () => ({

        todoList: []
    }),
    created(){
        this.fetchTodoList()
    },
    methods:{ 
        onTodoCreated(){
            this.fetchTodoList();
        },
        onTodoPatched() {
            this.fetchTodoList();
        },

        onTodoDeleted() {
            this.fetchTodoList();
        },
        async fetchTodoList(){
            try{
                this.todoList = await fetchTodoList();
            } catch (error){
                console.error({error})
            }
        },
    }
};
</script>
