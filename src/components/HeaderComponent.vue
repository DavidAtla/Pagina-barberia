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
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      showSearch: false,
      searchQuery: '',
      pageElements: [], // Elementos extraídos del DOM
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
    // Alternar la visibilidad de la barra de búsqueda
    toggleSearch() {
      this.showSearch = !this.showSearch
      if (!this.showSearch) {
        this.searchQuery = ''
        this.clearHighlights()
      }
    },

    // Resaltar resultados de búsqueda
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
            el.style.backgroundColor = '#D2B48C' // Resaltar coincidencias
            el.setAttribute('data-search-highlight', 'true')
          })
        }
      })
    },

    // Limpiar los resaltados de búsqueda
    clearHighlights() {
      document.querySelectorAll('[data-search-highlight]').forEach((el) => {
        el.style.backgroundColor = ''
        el.removeAttribute('data-search-highlight')
      })
    },

    // Desplazar a un elemento específico de la búsqueda
    scrollToElement(text) {
      const element = [...document.querySelectorAll('h1, h2, h3, p, span, li, a')].find((el) =>
        el.textContent.toLowerCase().includes(text.toLowerCase()),
      )
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },

    // Desplazar a una sección específica usando su ID
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },

    // Escanear el contenido de la página para extraer los textos
    scanPageContent() {
      this.pageElements = [...document.querySelectorAll('h1, h2, h3, p, span, li, a')]
        .map((el) => el.textContent.trim())
        .filter((text) => text)
    },
  },
  mounted() {
    this.scanPageContent() // Escanear el contenido de la página al cargar
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
</style>
