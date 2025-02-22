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

      <!--Primera -->
      <!-- Final-->
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

<style scoped>
.q-img {
  height: 560px;
  width: 100%;
  border-radius: 20px;
}
.q-card {
  max-width: 920px;
  height: 560px;
  border-radius: 20px;
}
</style>
