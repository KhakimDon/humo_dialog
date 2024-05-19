<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from "../stores/Auth"
import router from '@/router';

let userStore = useUsersStore()
const login = ref('')
const password = ref('')
let ERRROR = ref(false)
let ERRROR_alert = ref(false)

function formSubmit() {
    let filter = userStore.users.some(item => item.password == password.value && login.value == item.login)
    filter ? enter_200() : error_404()
}

function enter_200(){
    window.localStorage.logIn = true
    router.push('/') 
}

function error_404() {
    ERRROR.value = true
    ERRROR_alert.value = true
    setTimeout(() => {
        ERRROR_alert.value = false
    }, 2000);

}

</script>


<template>
    <div class="bgbg">
        <div role="alert" :class="{ alertPop: ERRROR_alert }"
            class="alert opacity-0 alert-error fixed duration-[.3s] w-[90%] flex top-[-30px] left-[50%] translate-x-[-50%]">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span class="m font-[600]">Parol yoki login xato kiritilgan!</span>
        </div>
        <div class="flex min-h-full z-20 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-[70px] w-auto" src="../assets/footer.png" alt="Your Company">
                <h2 class="mt-[10px] text-center text-2xl font-bold text-[white] leading-9 tracking-tight m">Humo o'quv
                    platformasiga kirish</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form @submit.prevent="formSubmit()" class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Login</label>
                        <div class="mt-2">
                            <input id="login" :class="{ red: ERRROR }" v-model="login" placeholder="Loginni kiriting"
                                name="login" type="text" autocomplete="login" required
                                class="block pl-[10px] outline-none bg-[white] h-[50px] placeholder:font-[500] font-[1000] text-[20px] m w-full rounded-md border-0 py-1.5 text-gray-900  border-[2px] border-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password"
                                class="block text-sm font-medium leading-6 text-gray-900">Parol</label>

                        </div>
                        <div class="mt-2">
                            <input :class="{ red: ERRROR }" id="password" v-model="password" name="password"
                                type="password" placeholder="Parolni kiriting" autocomplete="current-password" required
                                class="block outline-none w-full bg-[white] border-[2px] border-black m pl-[10px] h-[50px] placeholder:font-[500]  font-[1000] text-[20px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full border-[2px] border-black justify-center rounded-md bg-[#24F8BE] px-3 py-1.5 text-sm font-[800] leading-6 text-black shadow-sm hover:bg-[#24F8BE] focus-visible:outline focus-visible:outline-2 m focus-visible:outline-offset-2 focus-visible:outline-[#24F8BE] text-[21px] m  items-center h-[50px]">Kirish</button>
                    </div>
                </form>

                <div class="w-[100%] p-[0px]">
                    <div class="bg-[#33ACF1] border-[2px] border-white mt-[40px] rounded-[10px]">
                        <p class="m text-white p-[10px] font-[600] text-center text-sm">
                            Agar login va paroliz bo'lmasa admin bilan bog'laning ! <a class="underline"
                                href="tel:+79099022030">+7 (909) 902-20-30</a>
                        </p>
                    </div>
                    <a href="https://t.me/bashirova_dilshoda">
                        <div
                            class="btn mt-[10px] border-black border-[2px] m text-[18px] font-[800] bg-[#24F8BE] w-[100%]">
                            Admin
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.alertPop {
    top: 30px;
    opacity: 1;
}

.red {
    color: red !important;
    border-color: red !important;
}

.bgbg {
    height: 100vh;
    padding-bottom: 100px;
    background-image: url('../assets/bgbg.png');
}
</style>