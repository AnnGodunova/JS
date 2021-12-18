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
  </div>
</template>

<script>
export default {
    name: 'InfoCard',
}
</script>

<style>

</style> 
