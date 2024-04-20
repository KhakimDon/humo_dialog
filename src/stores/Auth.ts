import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {


    const users = [
        {
            id: 1,
            title: "Admin",
            login: "admin-humo",
            password: "5wqLo#dFaxZ",
        },
        {
            id: 2,
            title: "Khakim",
            login: "khakim",
            password: "khakim1754",
        },
    ]



  return { users };
});
