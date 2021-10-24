<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="card">
      <img src="../ava.png" width=95px height=115px align="left" vspace=4 hspace=10>
      <div class="info">
        <label class="heading">Фамилия: </label>
        <label>Годунова</label>
      </div>
      <div class="info">
        <label class="heading">Имя: </label>
        <label>Анна</label>
      </div>
      <div class="info">
        <label class="heading">Отчество: </label>
        <label>Андреевна</label>
      </div>
      <div class="info">
        <label class="heading">Группа: </label>
        <label>БСБО-05-19</label>
      </div>
      <div class="info">
        <label class="heading">Скилы: </label>
        <label>Выравнивание текста по правому краю &#128512;</label>
      </div>
    </div>
    <div class="card">
      <form>
        <div class="form-field">
          <label class="heading" for="name">ФИО: </label>
          <input id="name" type="text" required>
        </div>
        <div class="form-field">
          <label class="heading" for="email">E-mail: </label>
          <input id="email" type="email" required>
        </div>
        <div class="form-field">
        <label class="heading">Сообщение: </label>
        <textarea placeholder="Введите ваше сообщение..." required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ['msg'],
  data: () => ({
    
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.form-field input:hover {
  border: 2px dotted rgb(149, 173, 241);
}
.form-field input {
  outline: none;
  line-height: 20px;
  width: 70%;
  margin: 2px auto; 
}
.form-field label {
  display: inline-flex;
  width: 30%;
  margin: 2px auto;
}
.card p {
  width: 90px;
  height: 25px;
}
.info label {
  display: inline-flex;
  width: 100px;
  line-height: 25px;
}
label.heading {
  width: 80px;
  font-weight: bold;
  text-align: right;
}
textarea {
  width: 304px;
  height: 94px;
  resize: none;
  border-radius: 10px;
  background-color: rgb(236, 234, 234);
  border: rgb(236, 234, 234);
  box-shadow: 2px 2px 2px 0px grey;
  
}
button {
  margin: 5px auto;
  align-self: center;
}
button:hover {
  width: 50%;
  height: 50%;
}
div.card {
  width: 310px;
  height: 200px;
  padding: 10px;
  margin: 10px auto;
  border: 1px outset rgb(28, 82, 199);
  border-radius: 20px;
  background-color: rgb(160, 156, 223);
  box-shadow: 10px 10px 10px 0px grey;
}
div.info {
  text-align: right;
  font-size: 11pt;
}
div.form-field {
  text-align: left;
  font-size: 11pt;
}
</style>