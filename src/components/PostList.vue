<template lang="">
    <div class='post-list'>
    <!-- <div v-for="post in posts" :key='post.id'> -->
        <!-- <div v-for="post in posts" :key='post'> -->
        <div v-for="(post,i) in posts" :key='i'>
            <SinglePost :post='post'/>
        </div>

    </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';
export default {
    props:['posts'],
    components:{SinglePost},
    setup(props){
        // console.log(props.posts)
        onMounted(()=> console.log('mounted'))
        onUnmounted(()=> console.log('unmounted'))
        onUpdated(()=> console.log('updated'))//data change cause rerender
    }
}
</script>
<style lang="">
    
</style>