    <script setup>
    import BlogPlusComponent from '@/components/BlogPlusComponent.vue'
    import { ref, onMounted, onUnmounted } from 'vue'
    
    const posts = ref([])
    const loading = ref(true)
    const modal = ref(false)
    const selectedPost = ref('')
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        console.log(data);
        
        posts.value = data.posts
      } catch (error) {
        console.error('Erreur lors du chargement', error)
      }
      loading.value = false
    }
    
    const openModal = (post) => {
        modal.value=true
        console.log(post.body);
        
      selectedPost.value = post.body
      console.log(selectedPost.value);
      
    }
    
    onMounted(() => {
      console.log('Blog monté')
      fetchPosts()
    })
    
    
    onUnmounted(() => {
      console.log('Blog détruit')
    })
    </script>
<template>
  <div>
    <h1>Blog</h1>

    <p v-if="loading">Chargement des articles...</p>

    <div v-else>
   <div class="container">
       <article v-for="post in posts" :key="post.id" >
       <div class="affichage">
         <h2 :title="post.title">{{ post.title }}</h2>
        <div class="sous-affichage">
            <p :body="post.body"><strong>Description</strong> : {{ post.body.substring(0,100)}}... <button type="submit" @click="openModal(post)">Lire Plus</button></p>
        <p><span><strong>👍 : </strong>{{ post.reactions.likes }} </span>
        <span> <strong>👎 : </strong>{{ post.reactions.dislikes }}</span>
        <span> <strong>👀👁 : </strong>{{ post.views }}</span></p>
        </div>
       </div>
      </article>
   </div>
    </div>
    <BlogPlusComponent v-if="modal" 
    :selectedPost="selectedPost"
    @close="modal=false"
    />
  </div>
</template>


<style scoped>
.container {
  margin: 40px auto;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.affichage {
  width: 300px;
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* .affichage:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
} */

.affichage h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.sous-affichage p {
  font-size: 14px;
  margin: 6px 0;
  color: #555;
}

span {
  color: #222;
  border: 1px solid #222;
  margin-right: 5px;
  border-radius: 5px;
}

</style>
