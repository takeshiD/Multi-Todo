<template>
  <b-card id="kanban">
    <b-card-body
      :title="title"
      style="max-width: 20rem"
    >
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: ["title"]
};
</script>
<style scoped>
#kanban {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>