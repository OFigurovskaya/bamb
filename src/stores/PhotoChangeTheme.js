import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePhotoChangeTheme = defineStore('photoChangeTheme', () => {
    const textBtn = ref('552');

    const fetchText = () => {
        if(document.querySelector('main').classList.contains('ligth')) {
            console.log('!');
        }
    }

    return {
       textBtn, fetchText
    } 
})