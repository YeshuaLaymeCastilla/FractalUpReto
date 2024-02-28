<template>
  <div class="search-container">
    <SearchBar @search="handleSearch" />
    <div class="country-list">
      <div v-if="loading">Cargando...</div>
      <div v-else class="country-grid">
        <div
          v-for="country in filteredCountries"
          :key="country.name.common"
          class="country-card"
          @click="showCountryDetails(country)"
        >
          <img :src="country.flags?.png" :alt="country.name?.common" class="country-flag" />
          <div class="country-name">{{ country.name.common }}</div>
        </div>
      </div>
    </div>
    <!-- Modal para mostrar los detalles del país -->
    <div v-if="selectedCountry" class="modal" @click.self="selectedCountry = null">
      <div class="modal-content" @click.stop>
        <span class="close" @click="selectedCountry = null">&times;</span>
        <img :src="selectedCountry?.flags?.png" :alt="selectedCountry?.name?.common" class="modal-flag" />
        <div class="modal-details">
          <h2>{{ selectedCountry.name.common }}</h2>
          <!-- Mostrar detalles del país -->
          <p><strong>Capital:</strong> {{ selectedCountry.capital }}</p>
          <p><strong>Población:</strong> {{ selectedCountry.population }}</p>
          <p><strong>Región:</strong> {{ selectedCountry.region }}</p>
          <p><strong>Idiomas:</strong> {{ selectedCountry.languages ? formatLanguages(selectedCountry.languages) : 'No hay información' }}</p>
          <p><strong>Monedas:</strong> {{ selectedCountry.currencies ? formatCurrencies(selectedCountry.currencies) : 'No hay información' }}</p>
          <!-- Agrega más detalles según sea necesario -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchCountries } from '@/services/CountryService';
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  setup() {
    const countries = ref([]);
    const loading = ref(false);
    const filteredCountries = ref([]);
    const selectedCountry = ref(null);

    onMounted(async () => {
      loading.value = true;
      try {
        const data = await fetchCountries();
        countries.value = data;
        filteredCountries.value = data;
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        loading.value = false;
      }
    });

    const handleSearch = (query) => {
      if (typeof query === 'string' && query.trim()) {
        // Filter countries by search query
        filteredCountries.value = countries.value.filter(country =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        // If search query is empty or not a string, show all countries
        filteredCountries.value = countries.value;
      }
    };

    const showCountryDetails = (country) => {
      selectedCountry.value = country;
    };

    const formatLanguages = (languages) => {
      return Array.isArray(languages) ? languages.join(', ') : 'No hay información';
    };

    const formatCurrencies = (currencies) => {
      return currencies ? Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'No hay información';
    };

    return {
      loading,
      filteredCountries,
      handleSearch,
      showCountryDetails,
      selectedCountry,
      formatLanguages,
      formatCurrencies,
    };
  }
};
</script>

<style scoped>
.country-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.country-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
}

.country-flag {
  width: 322px; 
  height: 160px;
  border-radius: 15px;
  object-fit: cover; 
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.modal-flag {
  width: 100px;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.country-name {
  text-align: center;
  margin-top: 10px;
}

* {
  font-family: 'Tahoma', sans-serif;
}
</style>
