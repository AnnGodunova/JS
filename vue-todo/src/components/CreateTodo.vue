<template>
    <section class="create-todo">
        <input v-model="name" type="text" placeholder="Название дела">
        <button @click="onCreateTodoClicked">Создать</button>
    </section> 
</template>

<script>
import {createTodo} from '@/netClient/todoService';
export default {
    name: 'CreateTodo',
        data: () => ({
            name:'',
    }),

    methods: {
        async onCreateTodoClicked(){
            try {
                const newTodo = await createTodo ({title: this.name})
                if (newTodo){
                    this.name = '';
                }
                 this.$emit('todo-created')
            } catch(error){
                console.error({error})
            }
        },
    },
};
</script>