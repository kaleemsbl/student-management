<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col">
        <List></List>
      </div>
      
    </div>
  </div>
</template>

<script>
import List from '../../components/teacher/List.vue'
export default {
  name: 'Teacher',
  components: {
    List
  }
}
</script>