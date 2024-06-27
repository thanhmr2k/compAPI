import {ref} from 'vue'

const getPost = (id) => {//parse id to fn
    const post = ref(null)
        const error = ref(null)
        
        const load = async ()=>{
            try{
                let data = await fetch('http://localhost:3000/posts/'+id)
                if (!data.ok){
                    throw Error('not exist')//will be catch later
                }
                post.value = await data.json()
            } catch(err){
                error.value = err.message
                console.log(error.value)
            }
        }

    return { post, error, load } 
}
export default getPost