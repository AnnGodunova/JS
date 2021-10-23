<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <div class="forma">
        <p> <img src=""><br> ФИО: Годунова Анна Андреевна <br> Группа: БСБО-05-19 <br> Скилы: <br>
        </p>
      </div>
      <!-- <div class="form-field">
        <label for="name">* Name</label>
        <input type="text" id="name" required />
      </div>
      <div class="submit-btm">
        <input type="submit" value="Submit" />
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forma p {
  margin: 10px 540px;
  text-align: left;
  padding:16px;
  box-shadow:10px 10px 10px grey;
  height: 200px;
  width:400px;
  border-radius: 12px;
}
p:hover {
  border: 5px double blue;
}
.form-field input:hover, .form-field input:focus{
  outline: none;
  border: 2px solid black;
  border-radius: 12px;
  padding: 8px 16px;
  border-color: green;

}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
