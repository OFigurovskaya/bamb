import { defineStore } from "pinia";
import { ref } from 'vue';
import { usePhotoList } from './PhotoList'

export const usePhotoFilter = defineStore('photoFilter', () => {
    const inputValue = ref('');
    const error = ref(' ');
    const numberAlbum = ref([]);

    const photoList = usePhotoList()


    //валидация формы
    const validateFilter = () => {
        if (/\d|\d\s/.test(inputValue.value)) {
            for (let elem of inputValue.value.split(' ')) {
                console.log(elem);
                numberAlbum.value.push(Number(elem))
            }
            inputValue.value = '';
            error.value = '';
        } else {
            error.value = 'Введено некорректное значение. Введите номер альбома (или несколько через пробел)';
            inputValue.value = '';
        }
    };

    //фильтрация формы
    const goFilter = () => {
        photoList.loading = true;
        setTimeout(() => {
            photoList.loading = false;
            const myLink = 'https://jsonplaceholder.typicode.com/photos?'

            let apiUrl = `${myLink}`;

            numberAlbum.value.forEach((x) => {
                apiUrl += `albumId=${x}&`;
                return photoList.allList.value = fetch(apiUrl)
                    .then((response) => response.json())
                    .then((json) => photoList.allList = (json));
            });
            numberAlbum.value = [];
        }, 2000);
    };

    return {
        validateFilter,
        inputValue,
        error,
        numberAlbum,
        goFilter
    }
})