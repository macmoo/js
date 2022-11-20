var app = new Vue({
    el:'#app',
    data:{
        message : 'HELLO Vue.js!!',
        uid     : 99, // #2
        flag    : false, // #4
        // #1
        newData : '새로운 데이터!',
    },
    methods:{
        clickBtn(){
            console.log("Hi!!!");
        },
        newClickBtn(){
            alert("new Button");
        }
    },

})