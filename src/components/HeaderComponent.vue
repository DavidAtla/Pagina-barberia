<template>
  <div>
    <!-- Barra superior con opciones de navegación -->
    <q-header elevated class="bg-white text-black header">
      <q-toolbar class="toolbar">
        <!-- Botón de menú (siempre visible en móvil y escritorio) -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menú"
          class="menu-btn"
          @click="toggleLeftDrawer"
        />

        <!-- Logo de la barbería dentro de la barra de menú -->
        <q-toolbar-title class="logo-container">
          <img src="src/assets/background-images/logo.jpeg" class="logo" />
        </q-toolbar-title>

        <!-- Menú de navegación (visible solo en escritorio) -->
        <q-tabs align="center" class="desktop-only q-pa-sm tabs">
          <q-tab label="INICIO" @click="selectSection('inicio')" />
          <q-tab label="NOSOTROS" @click="selectSection('nosotros')" />
          <q-tab label="SERVICIOS" @click="selectSection('servicios')" />
          <q-tab label="GALERÍA" @click="selectSection('galeria')" />
          <q-tab label="PRODUCTOS" @click="selectSection('productos')" />
          <q-tab label="CITA" @click="selectSection('cita')" />
        </q-tabs>

        <!-- Íconos de búsqueda y carrito en escritorio (ocultos en móvil) -->
        <q-btn flat icon="search" aria-label="Buscar" class="desktop-only" />
        <q-btn flat icon="shopping_cart" aria-label="Carrito" class="desktop-only" />
      </q-toolbar>
    </q-header>

    <!-- Drawer (Menú lateral en móvil) -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay width="80%">
      <q-list>
        <q-item clickable @click="selectSection('inicio')">
          <q-item-section> INICIO </q-item-section>
        </q-item>
        <q-item clickable @click="selectSection('nosotros')">
          <q-item-section> NOSOTROS </q-item-section>
        </q-item>
        <q-item clickable @click="selectSection('servicios')">
          <q-item-section> SERVICIOS </q-item-section>
        </q-item>
        <q-item clickable @click="selectSection('galeria')">
          <q-item-section> GALERÍA </q-item-section>
        </q-item>
        <q-item clickable @click="selectSection('productos')">
          <q-item-section> PRODUCTOS </q-item-section>
        </q-item>
        <q-item clickable @click="selectSection('cita')">
          <q-item-section> CITA </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      leftDrawerOpen: false, // Estado del drawer (abierto/cerrado)
      selectedSection: 'inicio', // Sección seleccionada por defecto
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen // Alternar drawer
    },
    selectSection(section) {
      this.selectedSection = section
      this.leftDrawerOpen = false // Cierra el drawer al seleccionar
    },
  },
}
</script>

<style scoped>
/* Estilos generales */
.logo {
  height: 60px; /* Aumentar tamaño del logo */
}

.bg-white {
  background-color: #ffffff !important;
}

.text-black {
  color: #000000 !important;
}

/* Alinear el logo dentro de la barra de menú */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Hace que el logo ocupe el espacio disponible */
}

/* Estilo del botón de menú */
.menu-btn {
  margin-right: 20px;
  display: flex;
  font-size: 1.2rem; /* Aumentar tamaño del icono (más grande) */
}

/* Estilos de la barra superior */
.toolbar {
  min-height: 80px; /* Aumentar la altura de la barra */
  display: flex;
  align-items: center; /* Asegura que los elementos estén alineados verticalmente */
}

/* Aumentar el tamaño de las pestañas y botones */
.tabs .q-tab {
  font-size: 1.2rem; /* Aumentar el tamaño de la fuente */
  padding: 12px 16px; /* Aumentar el tamaño de las pestañas */
  letter-spacing: 0.1rem; /* Separar las letras */
}

/* Modo móvil: Solo mostrar menú y logo */
@media (max-width: 600px) {
  .desktop-only {
    display: none !important; /* Ocultar el menú y los iconos en móvil */
  }

  .logo-container {
    text-align: center;
    width: 100%;
  }

  /* Ajustes del menú lateral en móvil */
  .q-drawer {
    width: 80%; /* Aumentar el ancho del menú lateral en móvil */
  }
}
</style>
