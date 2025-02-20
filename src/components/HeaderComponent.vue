<template>
  <q-header class="bg-transparent">
    <q-toolbar>
      <div class="flex items-start full-width">
        <!--MENU -->
        <q-header elevated class="bg-white text-black">
          <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>
              <img src="src/assets/background-images/logo.jpeg" class="logo" />
            </q-toolbar-title>

            <q-tabs align="right" class="q-pa-sm">
              <q-tab label="INICIO" />
              <q-tab label="NOSOTROS" />
              <q-tab label="SERVICIOS" />
              <q-tab label="GALERÍA" />
              <q-tab label="PRODUCTOS" />
              <q-tab label="CITA" />
            </q-tabs>

            <q-space />

            <q-btn flat icon="search" aria-label="Buscar" />
            <q-btn flat icon="shopping_cart" aria-label="Carrito" />
          </q-toolbar>
        </q-header>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.logo {
  height: 50px;
}

.bg-white {
  background-color: #ffffff !important; /* Se cambia el color de fondo a blanco */
}

.text-black {
  color: #000000 !important; /* Se cambia el color del texto a negro */
}
</style>
