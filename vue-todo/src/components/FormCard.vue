<template>
    <div class="card">
      <form>
        <div class="form-field-2">
          <label class="heading" for="name">Имя: </label>
          <input id="name" type="text" required>
        </div>
        <div class="form-field-2">
          <label class="heading" for="email">E-mail: </label>
          <input id="email" type="email" pattern=".+@globex\.com" required>
        </div>
        <div class="form-field-2">
        <label class="heading">Письмо: </label>
        <textarea placeholder="Введите сообщение..." required></textarea>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
</template>

<script>
export default {
    name: 'FormCard',
}
</script>

<style scoped>

</style>
