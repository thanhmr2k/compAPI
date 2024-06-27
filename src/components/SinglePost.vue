<template lang="">
    <div class='post'>
        <router-link :to="{name:'Detail', params: {id: post.id}}">
            <h3>{{post.title}}</h3>
        </router-link>
            <h3>{{snippet}}</h3>
            <span v-for ='tag in post.tags' :key='tag'>#{{tag}}</br></span>

    </div>
</template>
<script>
import {computed} from 'vue'
export default {
    props:['post'],
    setup(props){
        const snippet = computed(()=>{
            return props.post.body.substring(0, 50) + '....'
        })
        return {snippet}
    }
}
</script>
<style lang="">
    
</style>