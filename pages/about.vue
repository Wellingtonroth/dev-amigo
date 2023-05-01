<template>
  <div v-if="showDescription">
    <p @click="backToList">VOLTAR</p>
    <div class="description">
      {{ selectedInformation.description }}
    </div>
  </div>

  <ul class="main" v-if="!showDescription">
    <li 
      v-for="information in informationsList" 
      :key="information.id"
      @click="handleDescription(information.id)"
      @mouseenter="onHoverEnter(information.id)"
      @mouseleave="onHoverLeave(information.id)"
      class="list-hover"
    >
      <div class="image-container">
        <img
          :alt="information.alt" 
          class="image" 
          :style="opacityImage(information.id)" 
        />
        <div class="caption" v-if="activeAboutName[information.id]">
          {{ information.name }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const informationsList = ref([
      { 
        id: 1,
        image: 'brain',
        alt: 'brain',
        name: 'Core',
        description: 'Alguma descrição grande aquiii 111'
      },
      { 
        id: 2,
        image: 'computer',
        alt: 'computer',
        name: 'Work',
        description: 'Alguma descrição grande aquiii 2222222'
      },
      { 
        id: 3,
        image: 'heart',
        alt: 'heart',
        name: 'Paixões',
        description: 'Alguma descrição grande aquiii 3'
      },
    ]);

    const state = reactive({
      hoverActive: [],
    });

    const activeAboutName = ref([]);
    const showDescription = ref(false);
    const selectedInformation = ref(null); // Add a reactive variable to store the selected information

    const onHoverEnter = (id) => {
      state.hoverActive[id] = true;
      activeAboutName.value = [...state.hoverActive];
    };

    const onHoverLeave = (id) => {
      state.hoverActive[id] = false;
      activeAboutName.value = [...state.hoverActive];
    };

    const opacityImage = (id) => {
      return {
        opacity: state.hoverActive[id] ? '0.2' : '1',
        transition: 'opacity 1s ease'
      };
    };

    const handleDescription = (id) => {
      onHoverLeave(id);
      selectedInformation.value = informationsList.value.find(info => info.id === id); // Find the selected information object
      showDescription.value = true; // Set showDescription to true to display the description
    };

    const backToList = () => {
      showDescription.value = false; // Set showDescription to false to display the list
    };

    return {
      activeAboutName,
      informationsList,
      showDescription,
      selectedInformation,

      onHoverEnter,
      onHoverLeave,
      opacityImage,
      handleDescription,
      backToList,
    };
  }
};
</script>

<style scoped>
.main {
  @apply flex justify-around	items-center w-full;
}

.image-container {
  position: relative;
  cursor: pointer;
}

.caption {
  /* Your styles for the caption */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: opacity 2s ease;
  font-size: 20px;
  font-weight: bold;
}
</style>

