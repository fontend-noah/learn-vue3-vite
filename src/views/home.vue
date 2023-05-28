<template>there is home {{ user.a }}</template>
<script setup lang="ts">
import { ref, unref } from "vue";
import instance from "@/utils/request";

const user = ref({ a: 1 });
const a = unref(user);
console.log(a);
instance
  .get("/api/s?wd=123")
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });
</script>
