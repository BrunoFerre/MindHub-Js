const {createApp} = Vue
createApp({
    data(){
        return{
            urlApi:'./scripts/data.json',
            events:[],
            backEvents:[],
            text: '',
            category:[],
            catSel:[]
        }
    },
    created(){
        this.getData()
    },
    mounted(){

    },
    methods:{
        getData(){
            fetch(this.urlApi)
            .then(response => response.json())
            .then(apiData =>{
                this.events= apiData.events
                this.backEvents = this.events
                this.getCategory(this.events)
            })
            .catch(error => console.log(error.message))
        },
        getCategory(array){
            array.forEach(element => {
                if (!this.category.includes(element.category)) {
                    this.category.push(element.category)
                }
            });
        }
    },
    computed:{
      /*   filterText(){
            this.events= this.backEvents.filter(event => event.description.toLowerCase().includes(this.text.toLowerCase()))
        },
        filterCheck(){
            if (this.catSel.length>0) {
                this.events = this.backEvents.filter(category => this.catSel.includes(category.category))
            }else{
                this.events = this.backEvents
            }
        } */
        filtroDoble(){
            let filterOne = this.backEvents.filter(event=>event.description.toLowerCase().includes(this.text.toLowerCase()))
            if (this.catSel.length>0) {
                this.events =filterOne.filter
                (event => this.catSel.includes(event.category))
            } else {
                this.events = filterOne
            }
        }
    }
}).mount('#app')