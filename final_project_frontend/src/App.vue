<template>
  <!-- Overlay -->
  <aside
    class="w-full h-full z-[100] grid place-items-center p-4 fixed"
    v-if="appStore.overlayOpen"
  >
    <!-- Zona gris -->
    <div class="absolute top-0 left-0 w-full h-full bg-faded_gray -z-10"></div>

    <!-- Loader -->
    <div v-if="appStore.isLoading" class="grid place-items-center">
      <p class="text-3xl text-dark">Por favor espere...</p>
      <LoaderComponent />
    </div>
    <!-- Zona de elementos -->
    <div id="overlay" v-show="!appStore.isLoading"></div>
  </aside>

  <NavBarComponent :brandName="getAppName" />
  <router-view />
  <footer class="text-center bg-dark p-4 text-light">
    <small>{{ getAppName }} @ 2023. Derechos Reservados</small>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoaderComponent from "@/components/generic/LoaderComponent.vue";
import NavBarComponent from "./components/navbar/NavBarComponent.vue";
import controlStateMixin from "@/mixins/controlStateMixin.ts";

export default defineComponent({
  components: { NavBarComponent, LoaderComponent },
  mixins: [controlStateMixin],
  created() {
    // TODO: Verifica que el usuario exista en las cookies o localstorage y lo mete al state manager (Pinia)
  },
  computed: {
    getAppName() {
      return import.meta.env.VITE_APP_NAME;
    },
  },
  methods: {},
});
</script>
