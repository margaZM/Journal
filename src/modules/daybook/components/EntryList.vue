<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input 
      type="text"
      class="form-control"
      placeholder="Buscar entrada"
      />
    </div>

    <div class="entry-scrollarea">
      <Entry />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Entry: defineAsyncComponent( () => import ('../components/Entry.vue'))
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc( 100vh - 56px );
}

.entry-scrolarea {
  height: calc( 100vh - 110px );
  overflow: scroll;
}
</style>