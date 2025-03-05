import { defineStore } from "pinia";

export const usePhotoList = defineStore('photoList', {
    state: () => ({
        allList: [],
        loading: false,

    }),
    getters: {
        async getAllList() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                return this.allList =   fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => this.allList = (json));
            }, 2000);
            
            
            // return  await this.allList;
            
          }
    },
    
    
})