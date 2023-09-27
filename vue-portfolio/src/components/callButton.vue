<script>
export default {
  data: function() {
    return {
      count: 0,
      text: ""
    };
  },

  methods: {
    incrementCount: function() {
      this.count++;
    }
  }
};
</script>

<template>
  <div id="callButton">
    <p>You have called me {{ count }} times.</p>
    <button @click="incrementCount">Start Call</button>
    <button @click="() => count = 0">Reset Call Count</button>
  </div>
</template>

<style>
#callButton {
  text-align: center;
  color: --color-text;
}
</style>
