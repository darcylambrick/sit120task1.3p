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
  <!-- This page has not been edited except to make it work in vue -->
  <h1>
    Heading 1
  </h1>
  <p style="font-size:40px;">
    Paragraph
    <br><img
      src="https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg"
      alt="Stock Image" width="512" height="341">
  </p>
  <table>
    <tr>
      <th>1</th>
      <th>2</th>
    </tr>
    <tr>
      <td>3</td>
      <td>4</td>
    </tr>
  </table>
  <form action="/action_page.php">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="Place"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Holder"><br><br>
    <input type="submit" value="Submit">
  </form>
</template>

<style scoped>
p {
  color: navy;
  margin-left: 60px;
}

body {
  background-color: rgb(169, 169, 169);
}

h1 {
  color: white;
  text-align: center;
}
</style>
