<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDialogStore } from '../stores/Dialog'
import Footer from '../components/footer.vue';
import audioComp from '../components/audioComp.vue';

const dialogs = useDialogStore()
let getEventItem = dialogs.eventDialog(window.location.pathname.split('/')[2])


// const audio = ref(false)


onMounted(() => {
    window.scrollTo(0, 0);
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


// function play() {
//     let audios = new Audio();
//     audios.src = '../../public/audio/1.mp3';
    
//     if (audio.value) {
//         document.querySelector("#ref").pause()
//         audio.value = false
//     } else {
//         document.querySelector("#ref").play()
//         audio.value = true

//     }
//     console.log(document.querySelector("#ref").audio.currentTime = 10 );
    

// }

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

    <!-- player  -->
    <div
        class="sticky flex flex-col items-center justify-center bottom-0  bg-[#24F8BE] border-t-[2px] border-[black] px-[10px] pt-[5px] pb-[15px] w-[100%] ">
        <!-- <audio id="ref" type="audio/mpeg" src="../../public/audio/1.mp3"></audio> -->
        <p class="w-[100%] mb-[5px] text-left pr-[10px] m text-[12px]">{{ getEventItem.theme_ru }} / {{ getEventItem.theme }}</p>
        <audioComp :source="`/audio/${getEventItem.id}.mp3`" />

        <!-- <div @click="play()"
            class="border-[2px] border-[black] h-[40px] w-[40px] flex rounded-[50%] items-center justify-center">
            <svg v-if="!audio" class="w-5 translate-x-[2px] h-5" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg v-if="audio" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>

        </div>

        <div class="flex-col flex items-end flex-1 pl-[20px]">
            <span class="m font-[400] text-[12px] self-start">{{ getEventItem.theme_ru }} / {{ getEventItem.theme
                }}</span>
            <progress class="progress my-[2px] w-[100%]" value="20" max="100"></progress>
            <span class="m font-[500] text-[12px] ">02:21</span>
        </div> -->

    </div>

    <div class="bg-[#24F8BE] px-[20px] text-center py-[10px]  m text-[10px]">
        Audio "HUMO O'QUV MARKAZI" O'QITUVCHILARI TOMONIDAN YOZILGAN VA MUALLIFLIK HUQUQIGA EGA !
    </div>

    <Footer />
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