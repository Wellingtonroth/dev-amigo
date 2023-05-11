<template>
   <ul class="main" v-if="!showDescription">
    <li 
      v-for="information in informationsList" 
      :key="information.id"
      @click="handleDescription(information.id)"
      @mouseenter="onHoverEnter(information.id)"
      @mouseleave="onHoverLeave(information.id)"
      class="list"
    >
      <div class="image-container">
        <img
          v-if="information.image === 'brain'" 
          src="@/assets/images/brain.png"
          :alt="information.alt" 
          :style="opacityImage(information.id)"
        />
        <img
          v-if="information.image === 'heart'" 
          src="@/assets/images/heart.png"
          :alt="information.alt"
          :style="opacityImage(information.id)" 
        />
        <img
          v-if="information.image === 'computer'" 
          src="@/assets/images/computer.png"
          :alt="information.alt" 
          :style="opacityImage(information.id)"
        />
        <div class="caption" v-if="activeAboutName[information.id]">
          {{ information.name }}
        </div>
      </div>
    </li>
  </ul>

  <div v-if="showDescription" class="w-full	h-full">
    <div class="cursor-pointer w-fit" @click="backToList">
      <img width="26" height="26" src="@/assets/images/back-button.png" alt="back-button">
    </div>
    <div class="flex">
      <img 
        v-if="selectedInformation.image === 'brain'" 
        src="@/assets/images/brain.png"
        :alt="selectedInformation.alt" 
        class="image-selected"
      />
      <img
        v-if="selectedInformation.image === 'heart'" 
        src="@/assets/images/heart.png"
        :alt="selectedInformation.alt"
        class="image-selected"
      />
      <img
        v-if="selectedInformation.image === 'computer'" 
        src="@/assets/images/computer.png"
        :alt="selectedInformation.alt" 
        class="image-selected"
      />
      <div class="description">
        <h3>{{ selectedInformation.selected.title }}</h3>
        <p>{{ selectedInformation.selected.text }}</p>
      </div>
    </div>
  </div>
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
        name: 'Essência',
        selected: {
          title: 'Informações Essenciais',
          text: 'Adoro aprender coisas novas, principalmente quando envolve tecnologia. Sou muito curioso e gosto de entender como as coisas funcionam. E sou idealizador do canal ZZZZZZ com o intuito de mostrar ao mundo o conhecimento que adiquiri ao longo da vida.',
        },
      },
      { 
        id: 2,
        image: 'computer',
        alt: 'computer',
        name: 'Trabalho',
        selected: {
          title: 'Front-end',
          text: 'Sou desenvolvedor front-end e tenho conhecimento de tecnologias como Javascript, Vue.js, React.js, Nuxt.js, Tailwindcss, Sass, Styled Components, entre outras.',
        }
      },
      { 
        id: 3,
        image: 'heart',
        alt: 'heart',
        name: 'Paixão',
        selected: {
          title: 'Minhas Paixões',
          text: 'Sou apaixonado por varias coisas como: Aprender alguma tecnologia nova; Ouvir música enquanto trabalho; Ver series e filmes com minha família; Adoro animais; Jogar jogos com amigos; Ir para academia; Viajar para conhecer novos lugares e culturas;',
        }
      },
    ]);

    const state = reactive({
      hoverActive: [],
    });

    const activeAboutName = ref([]);
    const showDescription = ref(false);
    const selectedInformation = ref(null);

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
        transition: 'opacity 1s ease',
      };
    };

    const handleDescription = (id) => {
      onHoverLeave(id);
      selectedInformation.value = informationsList.value.find(info => info.id === id);
      showDescription.value = true; 
    };

    const backToList = () => {
      showDescription.value = false;
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
  @apply flex justify-center items-center w-full;
}

.image-container {
  @apply cursor-pointer relative;
}

.caption {
  @apply absolute bottom-0 left-0 right-0 top-0 flex items-center	justify-center font-bold text-4xl text-black;
}
.list {
  @apply ml-12;
}

.list:first-child {
  @apply ml-0 mr-2;
}

.image-selected {
  width: 200px;
  height: 200px;
}
</style>

