<template>
  <div>
    id :{{ id }}
   title: {{ title }}

  </div>
   </template> 
   <script setup lang="ts">
    defineProps<{ id: string ,title:string}>()
   </script>