<script>
export default {
  data: () => ({
    input: 'milkmidi',
    checkedNames: [],
  }),
};
</script>
<template>
  <section>
    <h2>{{input}}</h2>
    <p>{{checkedNames}}</p>
    <input type="text" 
      class="form-control" 
      v-model="input" />
    <div class="checkbox-wrap">
      <label>
        <input type="checkbox" 
          value="vue" v-model="checkedNames" />
        vue
      </label>
      <label>
        <input type="checkbox" 
          value="React" v-model="checkedNames" />
        React
      </label>
      <label>
        <input type="checkbox" 
          value="Angular" v-model="checkedNames" />
        Angular
      </label>
    </div>
  </section>
</template>

