const { createApp } = Vue

createApp({
  data() {
    return {
        title: 'TodoList',
        todoList : [
            {
                text: 'Fare la spesa',
                done: true,
            },

            {
                text: 'Portare il cane',
                done: false,
            },

            {
                text: 'Cucinare il pranzo',
                done: true,
            },

            {
                text: 'Pulire casa',
                done: false,
            },
        ],
    }
  },

  methods: {
    deleteTask(index){
        this.todoList.splice(index,1);
    }
  }
}).mount('#app')