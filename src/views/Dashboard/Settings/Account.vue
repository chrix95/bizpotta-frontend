<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-lg-4">
        <settings-sidemenu />
      </div>
      <div class="col-lg-8"></div>
    </div>
  </div>
</template>
<script>
import SettingsSidemenu from '../_partials/SettingsSidemenu'
export default {
  name: "Settings",
  components: {
    SettingsSidemenu
  }
};
</script>
<style scoped>
</style>