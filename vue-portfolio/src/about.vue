<script>
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
</script>

<template>
<div class="container">
  <div class="information">
    <h2>Information</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae velit non mauris bibendum feugiat nec vitae urna. Proin aliquam tortor sed quam blandit, et luctus dui ultrices. Nam in euismod urna. Etiam semper rutrum tortor, et porta neque venenatis vitae. Etiam accumsan metus ac nulla porta tincidunt. Nullam dictum ornare mi nec dictum. Morbi lacinia tellus sit amet ex vestibulum efficitur. Curabitur lacinia nulla imperdiet euismod fringilla. In urna lorem, ullamcorper suscipit lectus ac, condimentum elementum mi.</p>
  </div>
  <div class="experience">
    <h2>Experience</h2>
    <p>Donec tempor egestas dui, nec vulputate dolor auctor quis. Sed nulla magna, suscipit eget euismod sit amet, facilisis nec est. Duis in fringilla orci, ac vestibulum tellus. Donec vitae volutpat ex, nec vestibulum mi. Praesent eu leo at risus iaculis auctor sed quis leo. Duis sit amet erat in sem pharetra viverra nec nec erat. Mauris commodo eros ac ipsum dignissim semper. Aenean a sagittis nisl. Nam eu molestie erat. Aliquam id felis ullamcorper, gravida libero id, pulvinar dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur accumsan elit nulla, in consectetur elit euismod non. Mauris ac mi magna. Cras in molestie dui. Integer feugiat aliquet velit ac eleifend. Suspendisse molestie purus eget porta blandit.</p>
  </div>
  <div class="strengths">
    <h2>Strengths</h2>
    <p>Ut nec lacus vehicula, dapibus risus molestie, ullamcorper urna. Integer faucibus rutrum ante et ultrices. Nulla et mi in enim placerat varius. Nam convallis gravida arcu nec fermentum. Etiam condimentum sodales nisl id dictum. Nunc et mollis nibh. Donec placerat finibus vehicula. Proin fermentum lobortis arcu, eget porta ipsum consectetur vel. Vestibulum luctus mollis arcu, at dictum tortor volutpat at. Nulla leo est, laoreet vulputate odio non, dignissim aliquet elit. Maecenas eget suscipit nunc. Duis quis ipsum auctor magna lobortis accumsan ut porttitor magna.</p>
  </div>
  <div class="activities">
    <h2>Activities</h2>
    <p>Ut facilisis pharetra lorem scelerisque pellentesque. Aliquam bibendum suscipit justo, ut venenatis massa pulvinar tristique. Aenean ligula arcu, maximus non euismod eu, molestie quis erat. Morbi tempor felis sit amet nisi porta, eget ornare dolor cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sit amet tristique nisl. Etiam tincidunt pellentesque commodo. Ut mi augue, sodales eget egestas a, volutpat nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eget elit odio. Praesent molestie vehicula gravida. Pellentesque lobortis mattis arcu, congue dignissim ante pretium vel.</p>
  </div>
</div>
</template>

<style scoped>
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      grid-auto-flow: row;
      grid-template-areas:
        "information experience"
        "strengths activities";
      max-width: 1280px;
      margin: 10px auto;
      padding: 0rem 2rem;
    }

    .container>div {
      background-color: #333;
      padding: 10px;
    }

    .information {
      grid-area: information;
    }

    .experience {
      grid-area: experience;
    }

    .strengths {
      grid-area: strengths;
    }

    .activities {
      grid-area: activities;
    }
    
    h2 {
      color: #f2f2f2;
      font-size: 2rem;
    }

    @media screen and (max-width: 1000px) {
      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
          "information"
          "experience"
          "strengths"
          "activities";
      }
    }

</style>
