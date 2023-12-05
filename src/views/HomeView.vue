<script setup>
import Todolist from '../components/Todolist.vue';
import { useMouse } from '../util/useMouse';
import Rate from '@/components/Rate.vue';
import Count from '@/components/Count.vue';

</script>

<template>
  <main>
    
    <h1>这是首页</h1>
    <Todolist></Todolist>
    <Rate :value="3.5" ></Rate>
    <Count></Count>
  </main>
</template>
