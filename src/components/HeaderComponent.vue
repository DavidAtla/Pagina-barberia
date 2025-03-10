<template>
  <q-header class="bg-transparent">
    <q-toolbar>
      <div class="flex items-start full-width">
        <!--MENU-->
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
                alt="Logo"
                class="logo"
                style="width: 50px; height: 50px"
              />
            </q-toolbar-title>

            <!-- Tabs, visible only on larger screens -->
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

            <div v-if="showSearch" class="search-container" v-click-outside="closeSearch">
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

            <q-btn flat icon="shopping_cart" aria-label="Carrito" @click="toggleCartPopup" />
            <q-dialog v-model="showCartPopup">
              <q-card style="width: 500px; height: 550px">
                <q-card-section>
                  <div class="text-h6">Carrito</div>
                </q-card-section>
                <q-card-section>
                  <div>Tu carrito está vacío.</div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Cerrar" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-toolbar>
        </q-header>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="left" class="bg-white">
    <q-tabs vertical>
      <q-tab label="INICIO" @click="scrollToSection('inicio')" />
      <q-tab label="NOSOTROS" @click="scrollToSection('Nosotros')" />
      <q-tab label="SERVICIOS" @click="scrollToSection('Servicios')" />
      <q-tab label="PRODUCTOS" @click="scrollToSection('Productos')" />
      <q-tab label="GALERÍA" @click="scrollToSection('Galeria')" />
      <q-tab label="HORARIOS Y CITAS" @click="scrollToSection('Horarios')" />
      <img
        src="src/assets/background-images/logo.jpeg"
        alt="Logo"
        class="logo-menu"
        style="width: 75px; height: 75px"
      />
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
      this.pageElements.forEach((text) => {
        if (text.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          const elements = document.querySelectorAll('h1, h2, h3, p, span, li, a')
          elements.forEach((el) => {
            if (el.textContent.toLowerCase().includes(this.searchQuery.toLowerCase())) {
              el.style.backgroundColor = '#D2B48C'
              el.setAttribute('data-search-highlight', 'true')
            }
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
        this.leftDrawerOpen = false
      }
    },

    // Escanear el contenido de la página para extraer los textos
    scanPageContent() {
      this.pageElements = [...document.querySelectorAll('h1, h2, h3, p, span, li, a')]
        .map((el) => el.textContent.trim())
        .filter((text) => text)
    },
    toggleCartPopup() {
      this.showCartPopup = !this.showCartPopup
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
@media (max-width: 600px) {
  .q-header {
    padding: 10px;
  }
  .q-tabs {
    display: none;
  }
}
</style>
