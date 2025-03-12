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
              <q-list v-if="searchQuery.trim()" class="search-results">
                <q-item v-if="filteredResults.length === 0">
                  <q-item-section>Ningún resultado encontrado.</q-item-section>
                </q-item>
                <template v-for="(result, index) in filteredResults" :key="index">
                  <q-item clickable @click="scrollToElement(result)">
                    <q-item-section>{{ result }}</q-item-section>
                  </q-item>
                </template>
              </q-list>
            </div>

            <div>
              <q-btn flat icon="shopping_cart" aria-label="Carrito" @click="toggleCartPopup" />
              <q-dialog v-model="showCartPopup">
                <q-card style="width: 500px; height: 550px">
                  <q-card-section>
                    <div class="text-h6">Carrito</div>
                  </q-card-section>
                  <q-card-section v-if="cartItems.length > 0">
                    <div v-for="item in cartItems" :key="item.id">
                      {{ item.name }} - {{ item.price }}
                      <q-btn flat icon="delete" @click="removeItem(item.id)" />
                    </div>
                  </q-card-section>
                  <q-card-section v-else>
                    <div>Tu carrito está vacío.</div>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat label="Cerrar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-toolbar>
        </q-header>
      </div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" side="left" class="bg-white">
    <q-tabs vertical align="right" class="q-pa-sm">
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
      showCartPopup: false,
      cartItems: [],
      showSearch: false,
      searchQuery: '',
      pageElements: [], // Elementos extraídos del DOM
      leftDrawerOpen: false, // Estado del Drawer
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
          const elements = Array.from(
            document.querySelectorAll('h1, h2, h3, h4, text-h4, h5, h6, p, span, li, a'),
          ).filter((el) => el.textContent.toLowerCase().includes(this.searchQuery.toLowerCase()))
          elements.forEach((el) => {
            el.style.backgroundColor = '#D2B48C'
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
      const element = Array.from(document.querySelectorAll('h1, h2, h3, p, span, li, a')).find(
        (el) => el.textContent.toLowerCase().includes(text.toLowerCase()),
      )
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },

    // Desplazar a una sección específica usando su ID
    scrollToSection(sectionId) {
      this.leftDrawerOpen = false // Cierra el Drawer inmediatamente

      this.$nextTick(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId)
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300) // Pequeño retraso para evitar interrupciones visuales
      })
    },

    // Escanear el contenido de la página para extraer los textos
    scanPageContent() {
      this.pageElements = Array.from(document.querySelectorAll('h1, h2, h3, p, span, li, a'))
        .map((el) => el.textContent.trim())
        .filter((text) => text)
    },
    toggleCartPopup() {
      this.showCartPopup = !this.showCartPopup
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen // Alterna el estado del Drawer
    },
    addItemToCart(item) {
      this.cartItems.push(item)
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId)
    },
  },
  mounted() {
    this.scanPageContent()
  },
}
</script>
