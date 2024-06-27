<!-- <template>
  <div class="home">
    <p ref="p">my name is {{ name }}, my age is {{ age }}</p>
    <button @click = "handleClick"></button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref } from "vue"

export default {

  name: '',
  components: {
    
  },
  setup(){

    const p = ref(null)

    console.log("setup")
    let name = "mario" //not reactive value like data(){}
    let age= 30

    const handleClick = ()=>{
      console.log(p, p.value)
      p.value.classList.add("test")
      p.value.textContent = "hi"
    }

    return {name, age, handleClick, p}
  },
  created(){
    console.log("created")
  },
  mounted(){
    console.log("mounted")
  }
}
</script> -->

<template>
  <div class="home">
    <!-- <p>my name is {{ name }}, my age is {{ age }}</p>
    <button @click = "handleClick">click</button>
    <button @click = "age++">add 1 </button>
    <input type="text" name="" id="" v-model="name"> -->

    <h1>Learn about composition API</h1>

    <p>{{ ninjaOne.name }},{{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update</button>
    <h2>reactive</h2>

    <p>{{ ninjaTwo.name }},{{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update2</button>


    <input type="text" name="" id="" v-model="search">
    <p>search term {{ search }}</p>
    <div v-for="name in matchName" :key="name">{{ name }}</div>
    <button @click="handleWatch">Stop watch</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive ,computed, watch, watchEffect} from "vue"

export default {

  setup(){
    
    //when you surround value with ref, it becomes reactive
    //const means the ref of the name dont change

    // const name = ref("mario") 
    // let age= ref(30)

    // const handleClick = ()=>{
    //   name.value = 'luigi'
    //   age.value = 35
    // }

    // return {name, age, handleClick}

    const ninjaOne = ref({name:'mario', age:30})
    const ninjaTwo = reactive({name:'Luigi', age:25})

    const updateNinjaOne = ()=>{
      ninjaOne.value.age = 36
    }

    //reactive dont have to use .value but cant use primitive value
    //ref is better
    const updateNinjaTwo = ()=>{
      ninjaTwo.age = 35
    }

    //the shaun is asigned to name 
    const name2 = computed(()=>{
      return 'shaun'
    })

    //print array name and search
    const names = ref(['mario','luigi','peach','toad','bowser'])
    const search = ref('')

    const stopWatch = watch(search, ()=>{
      console.log('run ')
    })//watch kiem tra moi lan bien search thay doi thi chay function

    // watchEffect(()=>{
    //   console.log('watcheffect run')
    // })
    //kiem tra khi setup() run

    const stopWatchEff = watchEffect(()=>{
      console.log('watcheffect search run',search.value)
    })//kiem tra khi setup() run, va sau day moi lan search value doi, tuc la chay nhieu hon watch 1 lan. superior hon nha la khi nay database

    const handleWatch = ()=>{
      stopWatch()
      stopWatchEff()
    }

    const matchName = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })//filter names, neu co cung gia tri 'search' thi tra ve true va them vao gia tri cua matchName

    return {ninjaOne,ninjaTwo, updateNinjaOne,updateNinjaTwo, names,search,matchName,handleWatch}
  }
}
</script>

