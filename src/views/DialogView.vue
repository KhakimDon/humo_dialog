<script setup lang="ts">
import { useDialogStore } from '../stores/Dialog'

const dialogs = useDialogStore()

console.log(dialogs.dialogs);


</script>

<template>
   <div>
      <header class="bg-[#33ACF1] shadow fixed w-[100%] top-0 left-0">
         <!-- #24F8BE -->
         <!-- #33ACF1 -->
         <div class="mx-auto max-w-7xl flex justify-between items-center px-4 py-[10px] sm:px-6 lg:px-8">

            <button @click="$router.push('/')">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
               </svg>
            </button>
            <h3 class="m font-[1000] text-white text-[30px]">Dialoglar</h3>

         </div>
      </header>
      <div class="px-[15px] pt-[70px]">
         <p class="mt-[20px] m font-[600] text-white">Mavzu:</p>

         <div @click="$router.push(`dialog/${item.id}`)" v-for="item of dialogs.dialogs" :key="item.id"
            class="w-[100%] p-[10px] rounded-[10px] border-[2px] border-[black] bg-[#24F8BE] mt-[10px]">
            <p class="m font-[1000] text-[20px]"> {{ item.id }}. «{{ item.theme }}»</p>
            <p class="m">«{{ item.theme_ru }}»</p>
         </div>

      </div>
   </div>
</template>

<style scoped></style>