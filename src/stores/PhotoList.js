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

    const dataSortId = () => {
        allList.value.sort(function(a, b) {       
            if(b.id < a.id) {
                return (parseFloat(b.id) - parseFloat(a.id));
            } else {
                return (parseFloat(a.id) - parseFloat(b.id));
            }
            
        });
    }

    const dataSortAlbumId = () => {
        allList.value.sort(function(a, b) {       
            if(b.albumId < a.albumId) {
                return (parseFloat(b.albumId) - parseFloat(a.albumId));
            } else {
                return (parseFloat(a.albumId) - parseFloat(b.albumId));
            }
        });
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
        allList, loading, fetchPhotos, dataSortId, dataSortAlbumId
    };
});