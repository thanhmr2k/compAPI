<template >
    <div>
        <button @click="showPost=!showPost">toggle</button>
        <button @click="posts.pop()">Delete a post</button>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList v-if="showPost" :posts="posts"/> 
        </div>
        <div v-else>Loading</div>
    </div>
</template>
<script>
import {ref} from 'vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList'
export default {
    name:'home',
    components:{PostList},
    setup(){
        const showPost = ref(true);

        // const posts = ref([])
        // const error = ref(null)
        // const showPost = ref(true);

        // const load = async ()=>{
        //     try{
        //         let data = await fetch('http://localhost:3000/posts')
        //         if (!data.ok){
        //             throw Error('no data')//will be catch later
        //         }
        //         posts.value = await data.json()
        //     } catch(err){
        //         error.value = err.message
        //         console.log(error.value)
        //     }
        // }
        const {posts,error,load} = getPosts()
        load()
    return {posts,error,showPost}//bind posts vao component PostList
    }
}
</script>
<style >
    
</style>