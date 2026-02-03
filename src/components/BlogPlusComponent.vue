    <script setup>
    const props = defineProps({
      selectedPost:String
    })
    
    const emit = defineEmits(['close'])
    
    const close = () => {
      emit('close')
    }
    </script>
<template>
  <div class="container-modal" @click.self="close">
    <div class="modal">
      <p>{{ selectedPost }}</p>
      <button @click="close">Fermer</button>
    </div>
  </div>
</template>


<style scoped>
.container-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 1000; */
}

.modal {
  background: #fff;
  padding: 20px;
  max-width: 500px;
  border-radius: 10px;
}

button {
  margin-top: 15px;
}
</style>
