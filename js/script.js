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
            const emails = [];
            for (let i = 0; i < this.numEmails; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                
                console.log(res.data);
                
                const email = res.data.response
                emails.push(email);
                })
                
            }
        }
    },
    computed() {

    }
}).mount('#app');