<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col">
        <pre>{{ teacher }}</pre>

        <div class="q-pa-md">
          <table>
            <tr>
              <td>Hello</td>
              <td>world</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['teacher'],
  data() {
    return {
      
    }
  }
}
</script>