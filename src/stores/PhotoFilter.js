import { defineStore } from "pinia";
import { ref } from 'vue';

export const usePhotoFilter = defineStore('photoFilter', () => {
    const inputValue = ref('');
    const error = ref(' ');
    const numberAlbum = ref(Number);

    const validateFilter = () => {
        if(/\d|\d\s/.test(inputValue.value)) {
            numberAlbum.value = inputValue.value
            inputValue.value = '';
            error.value = '';
            console.log(numberAlbum.value);
        } else {
            error.value = 'Введено некорректное значение. Введите номер альбома (или несколько через пробел)';
            inputValue.value = '';
        }
    };

    const goFilter = () => {
        let z = numberAlbum.value
        console.log(numberAlbum.value);
        
    };



    return {
        validateFilter,
        inputValue,
        error,
        numberAlbum,
        goFilter
    }
    
})