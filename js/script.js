const { createApp } = Vue;

createApp({
    data() {
        return {
            emails : [],
            numEmails : 10,
            apiPath : 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        generateRndEmails(){

            const listEmails = [];
            
            for (let i = 0; i < this.numEmails; i++) {
                axios.get(this.apiPath).then((res)=>{
                
                console.log(res.data);
                
                const newEmail = res.data.response;

                listEmails.push(newEmail);
                
                console.log(listEmails);
                
                if(i === this.numEmails - 1){
                    this.emails = {...listEmails}
                }

            });

                
            }
        }
    },
    mounted() {
        this.generateRndEmails();
    }
}).mount('#app');