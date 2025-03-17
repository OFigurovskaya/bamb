import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const usePhotoChangeTheme = defineStore('photoChangeTheme', () => {
    const textBtn = ref('dark theme');


    const toggleTheme = () => {
        if(document.querySelector('main').classList.contains('ligth')) {
            document.querySelector('main').classList.remove('ligth');
            document.querySelector('main').classList.add('dark');
            textBtn.value = 'ligth theme';
        } else {
            document.querySelector('main').classList.remove('dark')
            document.querySelector('main').classList.add('ligth');
            textBtn.value = 'dark theme';
        }
    }


    return {
       textBtn, toggleTheme
    } 
})