<template>
        <li 
        class="todo-item"
        :class="{ done: isCompleted }"
        >   
            <div class="complete">
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    :checked="isCompleted"
                    @input="onCheckBoxInput()"
                />
            </div>
            <div class="title">
                {{ title }}
            </div>
            <div>
                <button @click="onTodoDeleted(id)">X</button>
            </div>
        </li>
</template>

<script>
import { patchTodo, deleteTodo } from '@/netClient/todoService';

export default {
    name: "TodoItem",
    props: {
        id: String,
        title: String,
        isCompleted: Boolean,
    },
    methods: {
        async onCheckBoxInput() {
            try {
                await patchTodo({ id: this.id, isCompleted: !this.isCompleted });
                this.$emit('todo-patched')
            } catch (error) {
                console.error({ error });
            }
        },

        async onTodoDeleted() {
            try {
                await deleteTodo({ id: this.id });
                this.$emit('todo-deleted')
            } catch (error) {
                console.error({ error });
            }
        },
    },
};
</script>