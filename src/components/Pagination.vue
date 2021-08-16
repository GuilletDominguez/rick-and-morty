<template>
   <nav  class="middle" aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a id="atras" class="page-link" href="#" aria-label="Previous" @click="previousPage">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
   
    <li class="page-item">
      <a id="delante" class="page-link" href="#" aria-label="Next" @click="nextPage">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
 
</template>

<script>
import { useStore } from 'vuex'
export default {
setup() {
   const store = useStore()
    const nextPage = ((status) =>{
        store.dispatch('nextPage')
    })
     const previousPage = ((status) =>{
        store.dispatch('previousPage')
    })
   return{
       nextPage,
       previousPage
   } 
}
}
</script>

<style lang="scss">
.middle{
  display: flex !important;;
  justify-content: center!important;
  a{
    color: var(--text-gray)!important;
    background-color: var(--background-card);
    &:hover{
      color: var(--text-orange)!important;
    }  
  }

}
</style>