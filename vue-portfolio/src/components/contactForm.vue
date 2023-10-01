<script>
export default {
    data () {
      return {
        chosenCountry:''
      }
    }
  }
</script>

<template>
    <div class="container">
      <form action="action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="fname">First Name</label>
          </div>
          <div class="col-75">
            <input required type="text" id="fname" name="firstname" placeholder="Your name..">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div class="col-75">
            <input required type="text" id="lname" name="lastname" placeholder="Your last name..">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Country</label>
          </div>
          <div class="col-75">
            <select id="country" name="country" v-model="chosenCountry" >
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="subject">Subject</label>
          </div>
          <div class="col-75">
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
          </div>
        </div>
        <div class="row">
          <input v-if="chosenCountry=='australia'" type="submit" value="Submit" >
          <input v-else type="submit" value="Applications from outside Australia are unlikely to be accepted" >
        </div>
      </form>
    </div>
</template>

<style scoped>
    /* Style inputs, select elements and textareas */
    input[type=text],
    select,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #bbb;
      border-radius: 4px;
      box-sizing: border-box;
      resize: vertical;
      background-color: lightgrey;
    }

    /* Style the label to display next to the inputs */
    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
    }

    /* Style the submit button */
    input[type=submit] {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right;
    }

    /* Style the container */
    .container {
      border-radius: 5px;
      background-color: #5a5a5a;
      padding: 20px;
    }

    /* Floating column for labels: 25% width */
    .col-25 {
      float: left;
      width: 25%;
      margin-top: 6px;
    }

    /* Floating column for inputs: 75% width */
    .col-75 {
      float: left;
      width: 75%;
      margin-top: 6px;
    }

    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }

    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {

      .col-25,
      .col-75,
      input[type=submit] {
        width: 100%;
        margin-top: 0;
      }
    }

</style>
