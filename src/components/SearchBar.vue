<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-input" @click="toggleFilterPanel">
        <i class="fas fa-search"></i>
        <input v-model="searchTerm" type="text" placeholder="Buscar país..." style="padding: 15px; width: 900px;">
      </div>
      <button class="search-button" @click="handleSearch">Buscar</button>
    </div>
    <transition name="fade">
      <div v-if="showFilterPanel" class="filter-panel">
        <!-- Contenido del filtro por continentes -->
        <FilterPanel @filter="handleFilter" />
      </div>
    </transition>
  </div>
</template>

<script>
import FilterPanel from './FilterPanel.vue';

export default {
  components: {
    FilterPanel
  },
  data() {
    return {
      searchTerm: '',
      showFilterPanel: false,
      selectedContinents: [] // Almacena los continentes seleccionados
    };
  },
  methods: {
    handleSearch() {
      // Emitir evento de búsqueda con el término de búsqueda y los continentes seleccionados
      this.$emit('search', { searchTerm: this.searchTerm, selectedContinents: this.selectedContinents });
    },
    handleFilter(selectedContinents) {
      this.selectedContinents = selectedContinents; // Actualizar los continentes seleccionados
    },
    toggleFilterPanel() {
      this.showFilterPanel = !this.showFilterPanel;
    }
  }
};
</script>


<FilterPanel @filter="handleFilter" />

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-bar {
  position: relative;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.search-button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.filter-panel {
  margin-top: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

