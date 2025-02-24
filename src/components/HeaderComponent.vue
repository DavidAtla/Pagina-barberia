<template>
  <div>
    <!-- Barra superior con opciones de navegación -->
    <q-header elevated class="bg-beige text-black header">
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

    <div class="main-content">
      <!-- Formulario de Cita con imagen de fondo -->
      <div class="appointment-form">
        <q-card flat bordered class="form-card">
          <q-card-section>
            <div class="form-title">HACER UNA CITA</div>
            <q-form class="q-pa-md">
              <!-- Primera fila: Nombre y Correo Electrónico -->
              <div class="form-row">
                <q-input label="Nombre" filled class="field" />
                <q-input label="Correo Electrónico" type="email" filled class="field" />
              </div>

              <!-- Segunda fila: Teléfono y Fecha -->
              <div class="form-row">
                <q-input label="Teléfono" type="tel" filled class="field" />
                <q-input label="Fecha" type="date" filled class="field" />
              </div>

              <!-- Campo de mensaje (última fila) -->
              <q-input label="Mensaje" type="textarea" filled class="field-message" />

              <div class="q-mt-md">
                <q-btn label="HACER UNA CITA" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
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

<style>
/* Estilos para el contenido principal, imagen y formulario */
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Imagen de fondo para el formulario de cita */
.appointment-form {
  background-image: url('src/assets/background-images/LogoSilla.jpeg');
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  max-width: 80%; /* Ajusta el tamaño del formulario según tus necesidades */
}

.form-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
}

.field,
.field-message {
  margin-bottom: 16px;
}
</style>
