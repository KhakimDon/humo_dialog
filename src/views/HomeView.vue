<script setup lang="ts">
import Footer from '../components/footer.vue';
</script>

<template>
  <div>
    <header class="bg-[#33ACF1] shadow z-30 fixed w-[100%]">
      <!-- #24F8BE -->
      <!-- #33ACF1 -->
      <div class="mx-auto max-w-7xl flex justify-between items-center px-4 py-[10px] sm:px-6 lg:px-8">
        <img class="h-[50px]" src="../assets/logo.png" alt="logo">
        <a href="tel:+79099022030" class="m text-white font-[600] underline">+7 (909) 902-20-30</a>
      </div>
    </header>
    <main class="pt-[40px]">
      <div class="mx-auto max-w-7xl overflow-hidden h-[800px] bg-[#33ACF1] py-6 sm:px-6 px-[10px] lg:px-8">
        <!-- Your content -->
        <div class="mt-[50px] log rounded-[20px] border-[#24F8BE] border-[1px] p-[14px] w-[100%] bg-[#349cd8]">
          <figure class="h-[100px]  border-[#ffffffa7] border-[1px] relative w-[100%] rounded-t-[13px] bg-[#24f8c0c8]">
            <img class="absolute bottom-[-27px]" src="../assets/dialog.png" alt="dialog">
          </figure>
          <div class="m text-white font-[700] text-[30px] mt-[10px] flex items-center justify-between">
            <span>Dialoglar</span>
            <div class="badge bg-[#33ACF1] text-white m text-[13px]">bepul</div>
          </div>
          <p class="m text-white font-[400] text-[16px]">Malakali pedagoglarimiz tomonidan tuzilgan Rus - Uzbek tilida
            <u>60</u> ta har xil mavzudagi dialog.</p>
          <button @click="$router.push('/dialog')" class="btn mt-[10px] m border-[black] bg-[#24F8BE] border-[1px]">Ko'rish</button>
        </div>

        <div
          class="mt-[30px] relative log2 rounded-[20px] border-[#24F8BE] border-[1px] p-[14px] w-[100%] bg-[#349cd8]">
          <div class="soon m p-[10px]">
            Tez kunda ! <br> Rus tilida 100 000 dan ortiq so'zlar
          </div>
        </div>
      </div>

    </main>
    <Footer/>
  </div>
</template>

<style>
.log {
  height: 320px;
}

.log2 {
  background-image: url('../assets/word.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 320px;
  overflow: hidden;
}

.soon {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  font-weight: 1000;
  color: rgba(255, 255, 255, 0.78);
  background: #33abf1ec;
}
</style>
