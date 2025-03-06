import { defineStore } from "pinia";
import { ref, computed, watch } from 'vue'

// export const usePhotoList = defineStore('photoList', {
//     state: () => ({
//         allList: [],
//         loading: false,

//     }),
//     getters: {
//         //получить все фотографии
//         async getAllList() {
//             this.loading = true
//             setTimeout(() => {
//                 this.loading = false
//                 return this.allList =   fetch("https://jsonplaceholder.typicode.com/photos")
//             .then((response) => response.json())
//             .then((json) => this.allList = (json));
//             }, 2000);
//           }
//     },
// })

export const usePhotoList = defineStore('photoList', () => {
    const allList = ref([]);
    const loading = ref(false);

    //Получить все фотографии
    const getAllList = computed(async () => {
        //Запустить лоадер
        loading.value = true;
        setTimeout(() => {
            //Остановить лоадер
            loading.value = false;
            return allList.value = fetch("https://jsonplaceholder.typicode.com/photos")
                .then((response) => response.json())
                .then((json) => allList.value = (json));
        }, 2000);

        //Сохранить общий массив фото в ЛС
        const photoInLocalStorage = localStorage.getItem('allList')
        if (photoInLocalStorage) {
            console.log(JSON.parse(photoInLocalStorage));
        }

        //Отслеживать и созранять изменения в общем массиве фото
        watch(allList, (state) => {
            localStorage.setItem('allList', JSON.stringify(state))
        }, { deep: true })

    })

    return {
        allList, loading, getAllList
    }
})