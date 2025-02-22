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
      <div class="contenedor-curso">
        <h2 class="text-h4">MASTER BARBER</h2>
        <div class="borde-rojo q-pa-md">
          <center>
            Este esquema está diseñado para que aprendas desde cero y alcances la especialidad,
            siendo capaz de potenciar tu trabajo.
          </center>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="contenedor-curso">
          <h2 class="text-h4">MASTER BARBER</h2>
          <div class="borde-rojo q-pa-md">
            <center>
              Este esquema está diseñado para que aprendas desde cero y alcances la especialidad,
              siendo capaz de potenciar tu trabajo.
            </center>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="contenedor-curso">
          <h2 class="text-h4">MASTER BARBER</h2>
          <div class="borde-rojo q-pa-md">
            <center>
              Este esquema está diseñado para que aprendas desde cero y alcances la especialidad,
              siendo capaz de potenciar tu trabajo.
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuestrosCursosComponent',

  data() {
    return {
      slide: '1',
    }
  },
}
</script>
<style></style>
