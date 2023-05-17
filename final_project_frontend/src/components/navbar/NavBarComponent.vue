<template>
  <header class="sticky top-0 z-50">
    <section class="
        w-full
        bg-primary
        text-center
        p-3
        flex
        justify-between
        items-center
        gap-3
        text-dark
        flex-col
        md:flex-row
        shadow-md
    ">
      <!-- Brand -->
      <div class="flex justify-around items-center w-full md:w-fit" @click="$router.push('/')">
        <div class="flex items-center">
          <h1 class="text-3xl mr-3">{{ brandName }}</h1>
          <div class="rounded-full h-8 w-8 bg-light"></div>
        </div>
        <NavBarUserComponent v-if="userStore.isAuthenticated" :user-name="user" class="md:hidden self-end" />
      </div>

      <div v-if="$route.name !== 'Terms'">
        <!-- Search TODO: Ajustar search bar para JWT-->
        <form @submit.prevent="HandleSearch" v-if="userStore.isAuthenticated" class="
          flex
          items-center
          gap-1
          px-3
          py-2
          bg-light
          rounded-full
          shadow-md
          md:w-1/2
          w-full
        ">
          <input type="text" class="outline-none w-full" placeholder="¿Qué evento estás buscando?" v-model="searchParams" />
          <button type="submit">
            <Icon class="w-auto h-6" icon="tabler:search" />
          </button>
        </form>

        <!-- User -->
        <NavBarUserComponent v-if="userStore.isAuthenticated" :user-name="user" class="hidden md:flex" />
        <!-- Sub navigation -->
        <section v-if="userStore.isAuthenticated" class="bg-secondary p-3 hidden md:block">
          <ul class="flex gap-4 text-light underline text-sm">
            <li>Mis boletos</li>
            <li>Mis eventos</li>
            <li>Se acerca el día para...</li>
            <li>Próximos eventos</li>
          </ul>
        </section>
        <!-- No user navbar -->
        <nav class="w-fit" v-else>
          <ul class="list-none flex items-center gap-4 text-base">
            <li class="flex items-center gap-2">
              <a href="#nextEvents">Próximos eventos</a>
              <Icon class="w-auto h-6" icon="tabler:calendar-event" />
            </li>
            <li class="flex items-center gap-2">
              <a href="#contact">Contacto</a>
              <Icon class="w-auto h-6" icon="tabler:info-circle" />
            </li>
            <li class="flex items-center gap-2" @click="OpenLoginModal">
              <LoginRegisterRecoverModalComponent v-if="appStore.overlayOpen"/>
              <p>Ingresar</p>
              <Icon class="w-auto h-6" icon="tabler:login"/>
            </li>
          </ul>
        </nav>
      </div>
      <div v-else>
        <RouterLink :to="{name: 'Landing'}" class="text-xl underline hover:text-secondary">Regresar a página de inicio</RouterLink>
      </div>
    </section>


  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarUserComponent from "./NavBarUser.vue";
import LoginRegisterRecoverModalComponent from "@/components/modals/LoginRegisterRecoverModalComponent.vue";
import { Icon } from "@iconify/vue";
import controlStateMixin from "../../mixins/ControlStateMixin";

export default defineComponent({
  name: "NavBarComponent",
  mixins: [controlStateMixin],
  components: { NavBarUserComponent, Icon, LoginRegisterRecoverModalComponent },
  props: {
    brandName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchParams: '',
      user: 'alejandro',
      isUserOptionOpen: false,
      isLoginModalOpen: false,
    };
  },
  methods: {
    HandleSearch() {
      console.log("Handle search", this.$data.searchParams);
      this.$data.searchParams = '';
    },
    OpenLoginModal() {
      this.appStore.openOverlay();
      this.isLoginModalOpen = !this.isLoginModalOpen;
    },
  },
});
</script>

<style lang="scss">
@layer navbar {
  nav>ul>li {
    @apply relative p-1;

    &::after {
      content: "";
      @apply absolute h-[2px] w-0 bottom-0 left-0 bg-dark;
      transition: 0.2s;
    }

    &:hover::after {
      @apply w-full;
    }
  }
}
</style>