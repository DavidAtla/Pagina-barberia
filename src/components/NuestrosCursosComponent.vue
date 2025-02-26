<template>
  <div class="q-pa-md container bg-grey-1">
    <div class="col-md-6 col-12">
      <!-- Primera -->
      <q-page class="flex flex-center bg-grey-2">
        <div class="row q-pa-xl items-center">
          <!-- Imagen -->
          <div class="col-xs-12 col-md-6">
            <q-img src="src\assets\background-images\Home.png" fit="cover" />
          </div>

          <!-- Sección de Texto -->
          <div class="col-xs-12 col-md-6">
            <q-card flat class="q-pa-md text-center bg-grey-1">
              <q-card-section>
                <div class="text-h4 text-bold text-dark">GET YOUR STYLE YOU DESERVE!</div>
                <q-separator class="q-mt-md q-mb-md" />
                <q-icon name="mdi-mustache" size="md" color="brown" class="q-mb-md" />
                <div class="text-body1 text-grey-8">
                  BarberShop is a professional context. It often happens that private or clients
                  order a publication to be made and presented with the actual content still not
                  being ready. However, reviewers tend to be distracted by content, say, a random
                  text copied from the internet.
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn class="botonver" label="VER MÁS"></q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
      <!-- Final-->
      <!--Segunda-->
      <q-page padding class="page-bg">
        <!-- Título Principal -->
        <div class="custom-title text-h6 text-center q-pa-md">SERVICIOS DE MENU</div>

        <div class="row q-col-gutter-lg">
          <!-- Menú 1 -->
          <div class="col-12 col-md-4 q-mb-lg">
            <q-card flat class="bg-transparent q-pa-md text-center border-light-brown">
              <q-card-section>
                <!-- Logo -->
                <img src="src\assets\background-images\Menu1.png" alt="Logo" class="logo-image" />
                <!-- Título -->
                <div class="text-h6 q-mt-sm">Barba</div>
                <!-- Descripción -->
                <div class="text-body2 q-mt-sm text-white descripcion">
                  Ritual de Barba: . . . . . . . . . . . . $300 MXN
                  <div class="text-body2 q-mt-sm text-white">
                    Disfruta de un corte tradicional con atención personalizada y un ambiente único.
                  </div>
                </div>
                <div class="text-body2 q-mt-sm text-white descripcion">
                  Barba sin Ritual: . . . . . . . . . . . . $200 MXN
                  <br />
                  Disfruta de un corte tradicional con atención personalizada y un ambiente único.
                </div>
                <div class="text-body2 q-mt-sm text-white descripcion">
                  Disfruta de un corte tradicional con atención personalizada y un ambiente único.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Menú 2 -->
          <div class="col-12 col-md-4 q-mb-lg">
            <q-card flat class="bg-transparent q-pa-md text-center border-light-brown">
              <q-card-section>
                <!-- Logo -->
                <img src="src\assets\background-images\Menu2.png" alt="Logo" class="logo-image" />
                <!-- Título -->
                <div class="text-h6 q-mt-sm">Cabello</div>
                <!-- Descripción -->
                <div class="text-body2 q-mt-sm text-white">
                  Cortes modernos, afeitados y arreglos de barba para el hombre contemporáneo.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Menú 3 -->
          <div class="col-12 col-md-4 q-mb-lg">
            <q-card flat class="bg-transparent q-pa-md text-center border-light-brown">
              <q-card-section>
                <!-- Logo -->
                <img src="src\assets\background-images\Menu3.png" alt="Logo" class="logo-image" />
                <!-- Título -->
                <div class="text-h6 q-mt-sm">Completo</div>
                <!-- Descripción -->
                <div class="text-body2 q-mt-sm text-white">
                  Reserva tu cita o haznos cualquier consulta. Estamos para atenderte.
                </div>
              </q-card-section>
              <!-- Para Agregar un boton -->
              <!-- <q-card-actions align="center"> -->
              <!-- <q-btn label="Contactar" color="primary" /> -->
              <!-- </q-card-actions> -->
            </q-card>
          </div>
        </div>
      </q-page>
      <!--Final-->
      <!-- Cuarto -->
      <q-page class="q-pa-md flex flex-center page-background">
        <div class="q-gutter-md">
          <h2 class="text-center title-font">NUESTROS PRODUCTOS</h2>
          <p class="text-center subtitle-font">Ofrecemos diferentes productos de calidad</p>

          <q-list class="Ancho row justify-center">
            <q-card
              v-for="product in products"
              :key="product.name"
              class="q-ma-md col-xs-12 col-sm-6 col-md-2"
            >
              <q-img :src="product.image" class="product-image" />
              <q-card-section>
                <div class="text-h6 text-center">{{ product.name }}</div>
                <div class="text-center text-grey">${{ product.price }}</div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="brown" label="Comprar" />
              </q-card-actions>
            </q-card>
          </q-list>

          <div class="text-center q-mt-md">
            <q-btn color="brown" label="IR AL CARITO" />
          </div>
        </div>
      </q-page>
      <!--Final-->
      <!--Quinto-->
      <div>
        <q-tabs v-model="tab" dense>
          <q-tab name="tab1" label="Pestaña 1"></q-tab>
          <q-tab name="tab2" label="Pestaña 2"></q-tab>
          <q-tab name="tab3" label="Pestaña 3"></q-tab>
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tab1">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
          <q-tab-panel name="tab2">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
          <q-tab-panel name="tab2">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
          <q-tab-panel name="tab2">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
          <q-tab-panel name="tab3">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="6" xs="12">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
          <q-tab-panel name="tab2">
            <q-row class="q-gutter-md q-mt-md">
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
              <q-col cols="12" xs="6">
                <q-img
                  src="src/assets/background-images/Peine.png"
                  style="width: 250px; height: 250px"
                />
              </q-col>
            </q-row>
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <!--Final-->
      <!--Sexto-->
      <q-layout view="hHh lpR fFf">
        <q-page-container>
          <q-page class="flex flex-center text-white q-pa-md background">
            <div class="text-center">
              <h3 class="text-bold">NUESTROS HORARIOS DE ATENCION</h3>
              <p>
                <q-btn
                  class="boton"
                  href="https://wa.me/c/5212216007231"
                  label="CONTACTANOS POR WHATSAPP "
                >
                  <img
                    src="src/assets/background-images/what.png"
                    width="30px"
                    height="30px"
                    style="margin-left: 10px"
                  />
                </q-btn>
              </p>

              <div class="row justify-center q-mt-md">
                <q-card
                  v-for="(day, index) in workingHours"
                  :key="index"
                  class="day-card q-ma-sm q-pa-md text-center bg-grey-9 text-white BorderHora"
                  bordered
                >
                  <div class="text-bold text-h6">{{ day.day }}</div>
                  <div class="text-subtitle1">{{ day.hours }}</div>
                </q-card>
              </div>

              <h4 class="q-mt-md">DOMINGO : CERRADO</h4>
              <p class="text-bold q-mt-md text-h6">20% DE DESCUENTO EN TU PRIMER CORTE</p>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
      <!--Final-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'tab1',
      products: [
        {
          name: 'TIJERAS DE BARBERO',
          price: 20.0,
          image: 'src/assets/background-images/Tijeras.png',
        },
        {
          name: 'BROCHAS DE AFEITAR',
          price: 25.0,
          image: 'src/assets/background-images/Shaving-Brushs.png',
        },
        {
          name: 'NAVAJAS DE AFEITAR',
          price: 35.0,
          image: 'src/assets/background-images/Navaja de afeitar.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 12.0,
          image: 'src/assets/background-images/Peine.png',
        },
      ],
      workingHours: [
        { day: 'LUNES', hours: '6:00 AM - 6:30 PM' },
        { day: 'MARTES', hours: '6:00 AM - 6:30 PM' },
        { day: 'MIERCOLES', hours: '6:00 AM - 6:30 PM' },
        { day: 'JUEVES', hours: '6:00 AM - 6:30 PM' },
        { day: 'VIERNES', hours: '6:00 AM - 6:30 PM' },
        { day: 'SABADO', hours: '6:00 AM - 6:30 PM' },
      ],
    }
  },
}
</script>
<style scoped></style>
