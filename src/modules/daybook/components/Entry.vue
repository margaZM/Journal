<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push( {name: 'entry', params: { id: 10 }})"
  >
    <div class="entry-tittle d-flex">
      <span class="text-sucess fs-5 fw-bold"> 15 </span>
      <span class="mx-1 fs-5"> Julio</span>
      <span class="mx-2 fw-light"> 2022, jueves </span>
    </div>

    <div class="entry-description">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit rem libero, dolorem adipisci eaque nesciunt quas, sunt, ipsam beatae nisi cupiditate aliquid voluptatem aut culpa explicabo. Doloremque dolorem dolore itaque.</p>
    </div>
  </div>
</template>

<script>

export default ({

})
</script>

<style lang="scss" scoped>
  
</style>
