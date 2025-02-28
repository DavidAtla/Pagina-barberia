<template>
  <q-header class="bg-transparent">
    <q-toolbar>
      <div class="flex items-start full-width">
        <!-- MENU -->
        <q-header elevated class="bg-white text-black">
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
              v-if="$q.screen.xs"
            />

            <q-toolbar-title>
              <img
                src="src/assets/background-images/logo.jpeg"
                style="width: 50px; height: 50px"
                class="logo"
              />
            </q-toolbar-title>

            <!-- Tabs visibles solo en pantallas grandes -->
            <q-tabs align="right" class="q-pa-sm" v-if="!$q.screen.xs">
              <q-tab label="INICIO" @click="scrollToSection('inicio')" />
              <q-tab label="NOSOTROS" @click="scrollToSection('Nosotros')" />
              <q-tab label="SERVICIOS" @click="scrollToSection('Servicios')" />
              <q-tab label="PRODUCTOS" @click="scrollToSection('Productos')" />
              <q-tab label="GALERÍA" @click="scrollToSection('Galeria')" />
              <q-tab label="HORARIOS Y CITAS" @click="scrollToSection('Horarios')" />
            </q-tabs>

            <q-space />

            <!-- Botón de búsqueda -->
            <q-btn flat icon="search" aria-label="Buscar" @click="toggleSearch" />

            <!-- Input de búsqueda y resultados -->
            <div v-if="showSearch" class="search-container">
              <q-input
                v-model="searchQuery"
                dense
                outlined
                placeholder="Buscar..."
                class="q-ml-md"
                debounce="300"
                @update:model-value="highlightResults"
              />
              <q-list v-if="filteredResults.length > 0" class="search-results">
                <q-item
                  v-for="(result, index) in filteredResults"
                  :key="index"
                  clickable
                  @click="scrollToElement(result)"
                >
                  <q-item-section>{{ result }}</q-item-section>
                </q-item>
              </q-list>
            </div>

            <q-btn flat icon="shopping_cart" aria-label="Carrito" />
          </q-toolbar>
        </q-header>
      </div>
    </q-toolbar>
  </q-header>

  <!-- Menú desplegable para móviles -->
  <q-drawer v-model="leftDrawerOpen" side="left" class="bg-white">
    <q-tabs vertical>
      <q-tab label="INICIO" @click="scrollToSection('inicio')" />
      <q-tab label="NOSOTROS" @click="scrollToSection('Nosotros')" />
      <q-tab label="SERVICIOS" @click="scrollToSection('Servicios')" />
      <q-tab label="PRODUCTOS" @click="scrollToSection('Productos')" />
      <q-tab label="GALERÍA" @click="scrollToSection('Galeria')" />
      <q-tab label="HORARIOS Y CITAS" @click="scrollToSection('Horarios')" />
    </q-tabs>
  </q-drawer>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      showSearch: false,
      searchQuery: '',
      pageElements: [], // Elementos extraídos del DOM
      leftDrawerOpen: false, // Estado del menú desplegable
    }
  },
  computed: {
    filteredResults() {
      if (!this.searchQuery.trim()) return []
      return this.pageElements.filter((text) =>
        text.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch
      if (!this.showSearch) {
        this.searchQuery = ''
        this.clearHighlights()
      }
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    highlightResults() {
      this.clearHighlights()
      if (!this.searchQuery.trim()) return

      document.querySelectorAll('[data-search-highlight]').forEach((el) => {
        el.style.backgroundColor = ''
        el.removeAttribute('data-search-highlight')
      })

      this.pageElements.forEach((text) => {
        if (text.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          const elements = [
            ...document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, li, a'),
          ].filter((el) => el.textContent.toLowerCase().includes(this.searchQuery.toLowerCase()))
          elements.forEach((el) => {
            el.style.backgroundColor = '#D2B48C'
            el.setAttribute('data-search-highlight', 'true')
          })
        }
      })
    },
    clearHighlights() {
      document.querySelectorAll('[data-search-highlight]').forEach((el) => {
        el.style.backgroundColor = ''
        el.removeAttribute('data-search-highlight')
      })
    },
    scrollToElement(text) {
      const element = [...document.querySelectorAll('h1, h2, h3, p, span, li, a')].find((el) =>
        el.textContent.toLowerCase().includes(text.toLowerCase()),
      )
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        this.leftDrawerOpen = false // Cerrar el menú después de hacer clic en una opción
      }
    },
    scanPageContent() {
      this.pageElements = [...document.querySelectorAll('h1, h2, h3, p, span, li, a')]
        .map((el) => el.textContent.trim())
        .filter((text) => text)
    },
  },
  mounted() {
    this.scanPageContent()
  },
}
</script>

<style scoped>
.search-container {
  position: relative;
}

.search-results {
  position: absolute;
  background: white;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Ajustes para móviles */
@media (max-width: 600px) {
  .q-header {
    padding: 10px;
  }

  .q-toolbar {
    justify-content: space-between;
  }

  .q-tabs {
    display: none; /* Ocultar los tabs en pantallas pequeñas */
  }
}
</style>
