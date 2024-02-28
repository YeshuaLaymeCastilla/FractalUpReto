<template>
  <div>
    <!-- Botón para mostrar/ocultar el sidebar -->
    <div class="sidebar-toggle" @click="toggleSidebar">
        <path fill-rule="evenodd" d="M9.354 12.354a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
        <path fill-rule="evenodd" d="M8.5 12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z"/>
        <path fill-rule="evenodd" d="M14.5 15a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5z"/>
    </div>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <!-- Logo -->
      <div class="logo" @click="toggleSidebar">
        <span v-show="!sidebarCollapsed">LOGO</span>
      </div>

      <!-- Botones -->
<div class="button-container">
  <button class="button" :class="{ active: $route.path === '/countries' }" @click="navigateTo('/countries')">
    <span :class="{ 'hide-text': sidebarCollapsed }">Home</span>
  </button>
  <button class="button" :class="{ active: $route.path === '/vista1' }" @click="navigateTo('/vista1')">
    <span :class="{ 'hide-text': sidebarCollapsed }">Vista 1</span>
  </button>
  <button class="button" :class="{ active: $route.path === '/vista2' }" @click="navigateTo('/vista2')">
    <span :class="{ 'hide-text': sidebarCollapsed }">Vista 2</span>
  </button>
</div>


    </div>
    <!-- Botón de alternar barra lateral -->
    <div class="toggle-button" @click="toggleSidebar">
      <span v-if="sidebarCollapsed"></span>
      <span v-else>Ocultar Sidebar</span>
    </div>

    <!-- Vista seleccionada -->
    <div class="view">
      <router-link v-if="selectedView === 'Home'" :to="{ name: 'CountriesList' }" class="button" :class="{ active: activeButton === 'Home' }" @click="changeView('Home')"></router-link>
      <router-link v-else-if="selectedView === 'Vista 1'" :to="{ name: 'VistaUno' }" class="button" :class="{ active: activeButton === 'Vista 1' }" @click="changeView('Vista 1')">QUESO</router-link>
      <router-link v-else-if="selectedView === 'Vista 2'" :to="{ name: 'VistaDos' }" class="button" :class="{ active: activeButton === 'Vista 2' }" @click="changeView('Vista 2')">PAN</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SidebarContainer',
  data() {
    return {
      sidebarCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style scoped>
.sidebar-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 9999;
}

.sidebar {
  background-color: #6c757d;
  height: 100vh;
  width: 400px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  transition: width 0.3s, background-color 0.3s;
}

.sidebar.collapsed {
  width: 0; 
  padding: 0;
}

.logo {
  width: 70%;
  background-color: #dcdcdc;
  padding: 20px;
  border-radius: 10px;
  font-family: 'Berlin Sans FB', sans-serif;
  text-align: center;
  margin-bottom: 20px;
  margin: 0 auto 20px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
}

.hide-text {
  opacity: 0;
}


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Berlin Sans FB', sans-serif;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;
  border: 1px solid transparent;
  font-size: 24px;
  }

.button.active {
  background-color: #ffffff;
}

.view {
  margin-left: 420px;
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .sidebar {
    width: 100%;
    border-radius: 0;
  }

  .view {
    margin-left: 0;
  }
}

</style>
