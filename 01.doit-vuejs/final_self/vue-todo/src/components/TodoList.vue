<template>
    <section>
        <!-- AFTER -->
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
                <i class="checkBtn fa fa-check" aria-hidden="true">
                    {{ todoItem }}
                </i>
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>

        <!-- BEFORE -->
        <!--
        <ul>
            <li v-for="(todoItem, index) in propsdata" class="shadow">
                <i class="checkBtn fa fa-check" aria-hidden="true">
                    {{ todoItem }}
                </i>
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
        -->
    </section>
</template>

<script>
export default
{
    props: ['propsdata'],
    // data() {
    //     return {
    //         todoItems: []
    //     }
    // },
    // created(){
    //     if(localStorage.length > 0){
    //         for(var i = 0; i < localStorage.length; i++){
    //             this.todoItems.push(localStorage.key(i));
    //         }
    //     }
    // },
    methods : {
        removeTodo(todoItem, index) {
            // console.log('remove todo clicked -> todoItem::' + todoItem + ', index::' + index);
            // localStorage.removeItem(todoItem);
            // this.todoItems.splice(index, 1);
            this.$emit('removeTodo', todoItem, index);
        }
    }
}
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.list-item {
    display: inline-block;
    margin-right:10px;
}
.list-move {
    transition:transform 1s;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>