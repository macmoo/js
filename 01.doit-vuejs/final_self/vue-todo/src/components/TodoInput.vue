<template>
    <div>
        <!-- <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">추가</button> -->
        <div class="inputBot shadow">
            <input type="text"
                    v-model="newTodoItem"
                    v-on:keyup.enter="addTodo"
                    placeholder="할일을 입력해라.">
            <span class="addContainer" v-on:click="addTodo">
                <i class="addBtn fa fa-plus" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default
{
    data(){
        console.log('INPUT::data()');
        return {
            newTodoItem : ''
        }
    },
    created:function() {
        console.log('INPUT::created()');
    },
    methods: {
        addTodo() {
            console.log("INPUT::addTodo");
            console.log(this.newTodoItem);
            if(this.newTodoItem !== ""){
                var value = this.newTodoItem && this.newTodoItem.trim();
                // localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.$emit('addTodo', value);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus {
    outline : none;
}
.inputBox {
    background    : white;
    height        : 50px;
    line-height   : 50px;
    border-radius : 5px;
}
.inputBox input {
    border-style  : none;
    font-size     : 0.9rem;
}
.addContainer {
    float         : right;
    background    : linear-gradient(to right, #6478fb, #8763fb);
    display       : inline-block;
    width         : 3rem;
    border-radius : 0 5px 5px 0;
}
.addBtn {
    color          : white;
    vertical-align : middle;
}
</style>