<template>
  <q-footer class="bg-transparent text-black q-py-md">
    <q-toolbar class="q-pl-none q-pr-none">
      <div class="row full-width q-gutter-md justify-between items-center text-center">
        <!-- Dirección -->
        <div class="col-auto flex items-center">
          <q-item dense class="flex items-center">
            <q-item-section avatar>
              <a href="https://maps.app.goo.gl/ectfk6P3kEp9EieX8" target="_blank">
                <img
                  src="src/assets/background-images/LogoUbicacion.png"
                  width="30px"
                  height="30px"
                />
              </a>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-black text-bold">
                C.8 Sur 3508-Local 2D, Anzures, 72530 Heroica Puebla de Zaragoza, Pue
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <!-- Redes Sociales -->
        <div class="col-auto text-center flex items-center">
          <span class="text-bold text-black" style="font-size: 16px; margin-right: 10px"
            >Síguenos en:</span
          >
          <div class="flex q-gutter-sm">
            <a href="https://www.facebook.com/Houseofshavesbarbershop/" target="_blank">
              <img src="src/assets/background-images/LogoFacebook.png" width="30px" height="30px" />
            </a>
            <a href="https://www.instagram.com/academy_houseofshaves/" target="_blank">
              <img
                src="src/assets/background-images/LogoInstagram.png"
                width="32px"
                height="32px"
              />
            </a>
            <a href="https://www.tiktok.com/@academyhouseofshaves" target="_blank">
              <img src="src/assets/background-images/LogoTiktok.png" width="32px" height="32px" />
            </a>
            <a href="https://wa.me/525642439821" target="_blank">
              <img src="src/assets/background-images/LogoWhatsApp.png" width="30px" height="30px" />
            </a>
            <q-item-section>
              <q-item-label class="text-black text-bold"> 56 4243 9821 </q-item-label>
            </q-item-section>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="col-auto flex items-center">
          <q-item dense class="flex items-center">
            <!--Para agregar otra cosa-->
          </q-item>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    openTermsAndConditions() {
      window.open('src/assets/background-images/Diseño.pdf', '_blank')
    },
  },
}
</script>
