const { createApp } = Vue

createApp({
  data() {
    return {
        interval:false,
        newTask:'',
        title: 'TodoList',
        alert:{
            message:'',
            show: false,
            type:''

        },
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

    // * Eliminazione dei Todo
    deleteTask(index){
        if (this.interval) {
            clearTimeout(this.interval);
            this.interval= false;  
        }
        
        this.todoList.splice(index,1);
        this.alert.type='success';
        this.alert.message='Task eliminata con successo';
        this.alert.show=true;

        if (!this.interval) {
            this.interval = setTimeout(()=>{
                this.alert.show= false
            },1500);  
        }
    },

    // * Funzione per l'inserimento di un nuovo Todo
    addToDo(){
        const toDo = {
            text: this.newTask.trim(),
            done: false,
        };
        
        if (toDo.text.length < 5) {

            if (this.interval) {
                clearTimeout(this.interval);
                this.interval= false;  
            }

            this.alert.type ='danger',
            this.alert.message ='Errore: Inserisci almeno 5 caratteri'
            this.alert.show= true
            
            if (!this.interval) {
                this.interval = setTimeout(()=>{
                    this.alert.show= false
                },1500);  
            }

            return
        }

        if (this.interval) {
            clearTimeout(this.interval);
            this.interval= false;  
        }
 
        this.alert.type='success';
        this.alert.message='Task aggiunta con successo';
        this.alert.show=true;
        this.todoList.unshift(toDo);  
        this.newTask='';

        if (!this.interval) {
            this.interval = setTimeout(()=>{
                this.alert.show= false
            },1500);  
        }

        
    },

    // * Cambio valore della chiave
    changeDone(index){
        this.todoList[index].done = !this.todoList[index].done
    }
}
}).mount('#app')