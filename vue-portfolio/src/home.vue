<script>
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

    export default {
    data () {
      return {
        toggleValue: true
      }
    }
  }
</script>

<template>
  <div id="customBody">
    <h2>
      Personal Portfolio
    </h2>
    <p>
      This website shows a portfolio in place of a resume.
      This portfolio highlights tasks and projects that I have completed in the past as well as some information about
      me.
    </p>
    <h2>
      Contact Me
    </h2>
    <button @click="toggleValue = !toggleValue">
    Show/Hide Contact Page
    </button>
    <contact-form v-show="toggleValue"/>
    <h2>Use the button below to call me</h2>
    <call-button/>
  </div>
</template>

<style scoped>
    button {
      padding: 12px;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 1.75rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
      color: var(--color-heading);
    }

</style>
