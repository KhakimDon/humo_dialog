<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDialogStore } from '../stores/Dialog'
import Footer from '../components/footer.vue';

const dialogs = useDialogStore()
let getEventItem = dialogs.eventDialog(window.location.pathname.split('/')[2])


onMounted(() => {
    window.scrollBy(0, -100);
    let left = document.querySelectorAll(".leftside")
    let counter = 0
    let start = 1000
    setTimeout(() => {
        left[counter].style.transform = 'translateX(0px)'
        left[counter].style.opacity = '1'
    }, 200);
    setTimeout(() => {
        let leftside = setInterval(() => {
            counter++
        if (counter == left.length - 1) clearInterval(leftside)
            left[counter].style.transform = 'translateX(0px)'
            left[counter].style.opacity = '1'
        }, start)
    }, 500);

    setTimeout(() => {
        let right = document.querySelectorAll(".rightside")
        let counter_r = 0
        let rightside = setInterval(() => {
            right[counter_r].style.transform = 'translateX(0px)'
            right[counter_r].style.opacity = '1'
            counter_r++
            if (counter_r == right.length) clearInterval(rightside)
        }, 1000)
    }, 0);



})


</script>


<template>
    <div class="overflow-y-scroll pt-[60px]">
        <header class="bg-[#33ACF1] shadow fixed w-[100%] z-30 top-0 left-0">
            <!-- #24F8BE -->
            <!-- #33ACF1 -->
            <div class="mx-auto max-w-7xl flex justify-between items-center px-4 py-[10px] sm:px-6 lg:px-8">

                <div class="flex items-center">
                    <svg @click="$router.push('/dialog')" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-mr-[10px] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>

                </div>
                <img class="h-[40px]" src="../assets/logo.png" alt="">
            </div>
        </header>
        <div class="px-[20px] mt-[10px]">
            <span class="font-[1000] m text-white text-[20px]">{{ getEventItem.theme_ru }}.</span>
            <br>
            <span class="font-[500] m text-white text-[16px]">{{ getEventItem.theme }}.</span>
        </div>

        <div class="px-[10px] overflow-hidden mt-[10px] pt-[20px] pb-[100px] bg-grid">

            <div v-for="item of getEventItem.dialog" :key="item.id"
                :class="{ leftside: item.person == 1, rightside: item.person == 2 }"
                class="min-h-[40px] mb-[15px] flex gap-[5px]">
                <div class="h-[40px] w-[40px] rounded-[100%]">
                    <img v-if="item.person == 1 && item.gender == 'male'" class="h-[100%] w-[100%] object-cover"
                        src="../assets/male.png" alt="">
                    <img v-if="item.person == 2 && item.gender == 'male'" class="h-[100%] w-[100%] object-cover"
                        src="../assets/male2.png" alt="">
                </div>
                <div class="w-[max-content] max-w-[70%] p-[5px] rounded-[6px] h-[max-content] r l">
                    <p class="m text-[12px] font-[1000]">{{ item.ru }}</p>
                    <p class="m text-[9px]">{{ item.uz }}</p>
                </div>
            </div>

        </div>

    </div>
    <Footer/>
</template>

<style>
.leftside .l {
    background: white;
    border: 2px solid black;
    box-shadow: 6px 6px 0px #24F8BE;
}

.leftside .l p:nth-child(2) {
    color: #33ACF1;
    font-weight: 400;
}

.bg-grid {
    background-image: url('../assets/grid.png');
    background-size: contain;
}

.rightside {
    opacity: 0;
    transition-duration: 1s;
    transform: translateX(40px);
    justify-content: flex-end !important;
}

.leftside {
    opacity: 0;
    transition-duration: 1s;
    transform: translateX(-40px);
}

.rightside div:nth-child(1) {
    order: 3;
}

.rightside .l {
    border: 2px solid black;
    background: #24F8BE;
    box-shadow: 6px 6px 0px #24f8c0ae;
}

.rightside .l p:nth-child(2) {
    color: white;
    text-shadow: 0 0 0.5px black;
    font-weight: 800;
}
</style>