<script setup>
import navbar from "../organisms/navbar.vue";
import index from "../organisms/index.vue";
import alleblogs from "../organisms/alleblogs.vue";
import mijnwerk from "../organisms/mijnwerk.vue";
import overmij from "../organisms/overmij.vue";
import contact from "../organisms/contact.vue";
</script>

<template>
  <div>
    <navbar />
    <index />
    <alleblogs />
    <mijnwerk />
    <overmij />
    <contact />
    <slot />
  </div>
</template>
