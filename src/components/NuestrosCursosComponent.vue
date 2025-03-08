<template>
  <div class="q-pa-md container bg-grey-1">
    <div class="col-md-6 col-12">
      <!-- Primera -->
      <section id="Nosotros">
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
                  <div class="text-h4 text-bold text-dark">¡CONSIGUE EL ESTILO QUE TE MERECES!</div>
                  <q-separator class="q-mt-md q-mb-md" />
                  <q-icon name="mdi-mustache" size="md" color="brown" class="q-mb-md" />
                  <div class="text-body1 text-grey-8">
                    "BarberShop es un contexto profesional donde a menudo sucede que los clientes
                    privados o clientes ordenan una publicación que se haga y se presente sin que el
                    contenido real esté listo. Piense en un blog de noticias que se llena de
                    contenido cada hora el día de la publicación. Sin embargo, los revisores tienden
                    a distraerse con el contenido, digamos, un texto aleatorio copiado de la
                    Internet. Pero a medida que el texto alcanza su nuevo nivel y su dirección nunca
                    deja de renderizar y crear. Los revisores tienden a enfocarse en el texto, sin
                    considerar el diseño y sus elementos.
                  </div>
                </q-card-section>
                <q-card-actions align="center">
                  <q-btn class="botonver" label="VER MÁS"></q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </q-page>
      </section>
      <!-- Final-->
      <!--Segunda-->
      <section id="Servicios">
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
                    ♦ Barba Clásica: . . . . . . . . . . . . $120 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Ritual de Barba: . . . . . . . . . . . . $150 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Tinte de Barba: . . . . . . . . . . . . $50 MXN ♦
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
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Corte de Cabello: . . . . . . . . . . . . $150 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Bases: ♦ <br />
                    (De acuerdo al largo del cabello)
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Corte de Niño: . . . . . . . . . . . . $130 MXN ♦
                    <br />
                    (Menores de 13 Años)
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Delineado de Contornos: . . . . . . $50 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Delineado de Ceja: . . . . . . $50 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Grecas: ♦ <br />(De acuerdo al diseño, desde $50)
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
                  <div class="text-h6 q-mt-sm">Rostro</div>
                  <!-- Descripción -->
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Mascarilla Negra: . . . . . . . . $50 MXN ♦
                  </div>
                  <div class="text-body2 q-mt-sm text-white descripcion">
                    ♦ Mascarilla Hidratante: . . . . . . . . $50 MXN ♦
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
      </section>
      <!--Final-->
      <!-- Tercela -->
      <!--Final-->
      <!-- Cuarto -->
      <section id="Productos">
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
              <q-btn color="brown" label="VER MAS PRODUCTOS" @click="showMoreProducts" />
            </div>
          </div>

          <q-dialog v-model="dialog" persistent>
            <q-card :style="{ width: '85vw', height: 'auto', maxWidth: '1200px' }">
              <q-card-section>
                <div class="text-h6">Más Productos</div>
              </q-card-section>
              <div class="row">
                <q-item
                  v-for="product in moreProducts"
                  :key="product.name"
                  class="q-pa-md col-xs-12 col-sm-6 col-md-4"
                >
                  <q-item-section avatar>
                    <q-img :src="product.image" class="large-product-image" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ product.name }}</q-item-label>
                    <q-item-label caption>${{ product.price }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn color="brown" label="Comprar" />
                  </q-item-section>
                </q-item>
              </div>
              <q-card-actions align="right">
                <q-btn color="brown" label="CERRAR" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-page>
      </section>
      <!--Final-->
      <!--Quinto-->
      <section id="Galeria">
        <div>
          <q-tabs v-model="tab" dense>
            <q-tab name="tab1" label="Pestaña 1"></q-tab>
            <q-tab name="tab2" label="Pestaña 2"></q-tab>
            <q-tab name="tab3" label="Pestaña 3"></q-tab>
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name">
              <q-row class="q-gutter-md q-mt-md justify-center q-md-flex-row q-sm-flex-column">
                <q-col
                  v-for="(image, index) in panel.images"
                  :key="index"
                  cols="12"
                  xs="6"
                  class="auto"
                >
                  <q-img :src="image" class="image-margin" style="width: 215px; height: 210px" />
                </q-col>
              </q-row>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </section>
      <!--Final-->
      <!--Sexto-->
      <section id="Horarios">
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
                <q-btn
                  class="boton"
                  @click="showModal = true"
                  label="CLIC PARA AGENDAR UNA CITA !!!..."
                />
              </div>
            </q-page>
          </q-page-container>
        </q-layout>

        <!-- Modal de Agendamiento -->
        <q-dialog v-model="showModal">
          <q-card class="q-pa-md">
            <q-card-section>
              <div class="text-h6">Agendar Cita</div>
            </q-card-section>
            <q-card-section>
              <!-- Nombre del cliente -->
              <q-input v-model="appointment.name" label="Nombre Completo" />

              <!-- Selección de nombre (como servicio) -->
              <q-select v-model="appointment.selectedName" :options="names" label="Barberos:" />

              <!-- Servicio (sin cambios) -->
              <q-select v-model="appointment.service" :options="services" label="Servicio" />

              <!-- Fecha y Hora -->
              <q-input v-model="appointment.date" type="date" label="Fecha" />
              <q-input v-model="appointment.time" type="time" label="Hora" />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="Cancelar" v-close-popup />
              <q-btn color="primary" label="Agendar" @click="scheduleAppointment" />
              <q-btn color="secondary" label="Descargar CSV" @click="generateCSV" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </section>
      <!--Final-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'tab1',
      dialog: false,
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
      moreProducts: [
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 20.0,
          image: 'src/assets/background-images/Tijeras.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 25.0,
          image: 'src/assets/background-images/Shaving-Brushs.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 35.0,
          image: 'src/assets/background-images/Navaja de afeitar.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 12.0,
          image: 'src/assets/background-images/Peine.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 35.0,
          image: 'src/assets/background-images/Navaja de afeitar.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 12.0,
          image: 'src/assets/background-images/Peine.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 35.0,
          image: 'src/assets/background-images/Navaja de afeitar.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 12.0,
          image: 'src/assets/background-images/Peine.png',
        },
        {
          name: 'PEINES DE BARBERO PROFESIONAL',
          price: 12.0,
          image: 'src/assets/background-images/Peine.png',
        },
      ],
      workingHours: [
        { day: 'LUNES', hours: '11:00 AM - 8:00 PM' },
        { day: 'MARTES', hours: '11:00 AM - 8:00 PM' },
        { day: 'MIERCOLES', hours: '11:00 AM - 8:00 PM' },
        { day: 'JUEVES', hours: '11:00 AM - 8:00 PM' },
        { day: 'VIERNES', hours: '11:00 AM - 8:00 PM' },
        { day: 'SABADO', hours: '11:00 AM - 8:00 PM' },
      ],
      showModal: false,
      appointment: {
        name: '',
        selectedName: '', // Campo para el nombre seleccionado
        service: null,
        date: '',
        time: '',
      },
      services: [
        'Corte de Niño ',
        'Corte de Cabello  ',
        'Barba Clásica ',
        'Ritual de Barba  ',
        'Delineado de Contornos  ',
        'Delineado de Ceja  ',
        'Tinte de Barba ',
        'Grecas',
        'Bases',
        'Mascarilla Negra  ',
        'Mascarilla Hidratante  ',
      ],
      names: ['ESMERALDA', 'PILAR', 'DARIAN'], // Lista de nombres
      appointments: [],
      panels: [
        {
          name: 'tab1',
          images: [
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
          ],
        },
        {
          name: 'tab2',
          images: [
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
          ],
        },
        {
          name: 'tab3',
          images: [
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
            'src/assets/background-images/Peine.png',
          ],
        },
      ],
    }
  },
  methods: {
    showMoreProducts() {
      this.dialog = true
    },
    scheduleAppointment() {
      if (
        this.appointment.name &&
        this.appointment.selectedName &&
        this.appointment.service &&
        this.appointment.date &&
        this.appointment.time
      ) {
        this.appointments.push({ ...this.appointment })
        alert(
          `Cita agendada para ${this.appointment.name} con el Barbero ${this.appointment.selectedName} el ${this.appointment.date} a las ${this.appointment.time} para ${this.appointment.service}.`,
        )
        this.showModal = false
        this.appointment = { name: '', selectedName: '', service: null, date: '', time: '' } // Reiniciar el formulario
      } else {
        alert('Por favor, complete todos los campos.')
      }
    },
    generateCSV() {
      let content = 'Nombre,Seleccionado Nombre,Servicio,Fecha,Hora\n' // Encabezado CSV
      this.appointments.forEach((appt) => {
        content += `${appt.name},${appt.selectedName},${appt.service},${appt.date},${appt.time}\n` // Datos de cada cita
      })

      const blob = new Blob([content], { type: 'text/csv' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'citas_agendadas.csv' // Nombre del archivo
      link.click()
      URL.revokeObjectURL(link.href)
    },
  },
}
</script>
<style>
.large-product-image {
  width: 80px; /* Ajusta el tamaño según tus necesidades */
  height: auto; /* Ajusta el tamaño según tus necesidades */
}
.image-margin {
  margin: 5px; /* Ajusta el valor de margen según sea necesario */
}
</style>
