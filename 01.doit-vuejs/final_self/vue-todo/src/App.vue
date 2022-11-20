<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList  v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput  from './components/TodoInput.vue';
import TodoList   from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
export default
{
  data(){
    return {
      todoItems: []
    }
  },
  components:{
    "TodoHeader" : TodoHeader,
    "TodoInput"  : TodoInput,
    "TodoList"   : TodoList,
    "TodoFooter" : TodoFooter,
  },
  methods: {
    // 데이터 추가
    addTodo(){
    }
  }
}
</script>

<style>
body {
  text-align       : center;
  background-color : #f6f6f8;
}
input {
  border-style     : groove;
  width            : 200px
}
button {
  border-style     : groove;
}
.shadow {
  box-shadow       : 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>