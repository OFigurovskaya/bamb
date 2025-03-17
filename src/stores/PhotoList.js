// import { defineStore } from "pinia";
// import { ref, computed, watch, onMounted } from 'vue'

// // export const usePhotoList = defineStore('photoList', {
// //     state: () => ({
// //         allList: [],
// //         loading: false,

// //     }),
// //     getters: {
// //         //получить все фотографии
// //         async getAllList() {
// //             this.loading = true
// //             setTimeout(() => {
// //                 this.loading = false
// //                 return this.allList =   fetch("https://jsonplaceholder.typicode.com/photos")
// //             .then((response) => response.json())
// //             .then((json) => this.allList = (json));
// //             }, 2000);
// //           }
// //     },
// // })

// export const usePhotoList = defineStore('photoList', () => {
//     const allList = ref([]);
//     const loading = ref(false);

//     //Получить все фотографии
//     const getAllList = computed(async () => {
//         //Запустить лоадер
//         loading.value = true;
//         setTimeout(() => {
//             //Остановить лоадер
//             loading.value = false;
//             return allList.value =  fetch("https://jsonplaceholder.typicode.com/photos")
//                 .then((response) => response.json())
//                 .then((json) => allList.value =  (json));
//         }, 2000);

//         //Сохранить общий массив фото в ЛС
//         const photoInLocalStorage = localStorage.getItem('allList')
//         if (photoInLocalStorage) {
//             // console.log(JSON.parse(photoInLocalStorage));
//         }

//         //Отслеживать и созранять изменения в общем массиве фото
//         watch(allList, (state) => {
//             localStorage.setItem('allList', JSON.stringify(state))
//         }, { deep: true });

//     });

//     onMounted(() => {
//         getAllList(); // Call the function to fetch the photo list
//       });


//     return {
//         allList, loading, getAllList
//     }
// })


import { defineStore } from "pinia";
import { ref, watch, onMounted } from 'vue';

export const usePhotoList = defineStore('photoList', () => {
    const allList = ref([]);
    const loading = ref(false);

    // Action to fetch all photos
    const fetchPhotos = async () => {
        loading.value = true;
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const json = await response.json();
            allList.value = json;
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            loading.value = false;
        }
    };

    const dataSort = (x) => {
        allList.value.sort(function(a, b) {
            return (parseFloat(b.x) - parseFloat(a.x));
        });
        // console.log(allList.value);
    }

    const loadFromLocalStorage = () => {
        const photoInLocalStorage = localStorage.getItem('allList');
        if (photoInLocalStorage) {
            allList.value = JSON.parse(photoInLocalStorage);
        }
    };

    watch(allList, (state) => {
        localStorage.setItem('allList', JSON.stringify(state));
    }, { deep: true });

    onMounted(() => {
        loadFromLocalStorage();
        fetchPhotos();
    });

    return {
        allList, loading, fetchPhotos, dataSort
    };
});