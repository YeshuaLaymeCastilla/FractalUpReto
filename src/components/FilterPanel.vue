<template>
  <div class="filter-panel">
    <div class="continent" v-for="continent in continents" :key="continent.code" @click="toggleContinent(continent.code)" :class="{ 'selected': isSelected(continent.code) }">
      <img :src="continent.image" :alt="continent.name" class="continent-image">
      <span class="continent-name">{{ continent.name }}</span>
    </div>
    <button class="clear-button" @click="clearSelection">Limpiar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      continents: [
        { code: 'AF', name: 'África', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Africa_on_the_globe_%28red%29.svg/280px-Africa_on_the_globe_%28red%29.svg.png' },
        { code: 'AS', name: 'Asia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/280px-Asia_on_the_globe_%28red%29.svg.png' },
        { code: 'EU', name: 'Europa', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Europe_on_the_globe_%28red%29.svg/280px-Europe_on_the_globe_%28red%29.svg.png' },
        { code: 'NA', name: 'América', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/1200px-Americas_on_the_globe_%28red%29.svg.png' },
        { code: 'OC', name: 'Oceanía', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg/280px-Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg.png' },
      ],
      selectedContinents: [],
    };
  },
  methods: {
    toggleContinent(code) {
      const index = this.selectedContinents.indexOf(code);
      if (index === -1) {
        this.selectedContinents.push(code);
      } else {
        this.selectedContinents.splice(index, 1);
      }
      this.$emit('filter', this.selectedContinents); // Emitir evento de filtro con los continentes seleccionados
    },
    isSelected(code) {
      return this.selectedContinents.includes(code);
    },
    clearSelection() {
      this.selectedContinents = [];
      this.$emit('filter', this.selectedContinents); // Emitir evento de filtro con los continentes vacíos para limpiar la búsqueda
    },
  },
};
</script>

<style scoped>
.filter-panel {
  display: flex;
  flex-wrap: wrap;
  background-color: #cfe2f3; 
  padding: 20px;
}

.continent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
}

.continent.selected {
  background-color: lightblue;
}

.continent-image {
  width: 100px;
  height: 100px;
}

.continent-name {
  margin-top: 5px;
}

.clear-button {
  margin-top: auto;
  background-color: #87ceeb;
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
}
</style>
