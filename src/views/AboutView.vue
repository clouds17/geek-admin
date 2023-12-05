<template>
  <div class="about">
    <Heading :level="3">This is an about page</Heading>
  </div>
</template>
<script setup>
import Heading from '../components/Heading.jsx';
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
