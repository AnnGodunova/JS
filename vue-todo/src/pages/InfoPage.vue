<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <InfoCard/>
    <FormCard/>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import FormCard from '@/components/FormCard.vue'

export default {
  name: "InfoPage",
  props: ['msg'],
  components: {
    InfoCard,
    FormCard
  }
}
</script>
