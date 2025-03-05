import { defineStore } from "pinia";

export const usePhotoList = defineStore('photoList', {
    state: () => ({
        allList: [],
    }),
    getters: {
         getAllList() {
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then(data =>  this.allList = data);
            return this.allList;
        },

    }
})