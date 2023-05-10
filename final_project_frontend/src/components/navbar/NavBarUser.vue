<template>
    <div class="
            bg-secondary
            text-light
            p-3
            flex
            justify-around 
            items-center 
            gap-2 
            relative 
            w-fit 
            max-w-[10rem]
            rounded-sm
        "
        @click="isUserOptionOpen = !isUserOptionOpen">
        <div>
            <!-- TODO: Ajustar una imagen acá o ícono -->
            <Icon class="w-auto h-6" icon="tabler:user-circle" />
        </div>
        <span class="text-sm">{{ userName }}</span>
        <div :class="{ 'arrow-down': !isUserOptionOpen, 'arrow-up': isUserOptionOpen }"></div>
        <div v-if="isUserOptionOpen" class="
            bg-light
            rounded-bl-lg
            rounded-br-lg
            rounded-tl-lg
            w-[200%]
            md:w-[200%]
            h-fit
            absolute
            top-full
            right-0
            text-dark 
            text-start 
            border-2
            border-secondary
            p-1
            font-bold
          ">
          <div class="block md:hidden border-b-2 border-secondary">
            <p class="hover:bg-gray rounded m-2">Mis boletos</p>
            <p class="hover:bg-gray rounded m-2">Mis eventos</p>
            <p class="hover:bg-gray rounded m-2">Se acerca el día para...</p>
            <p class="hover:bg-gray rounded m-2">Próximos eventos</p>
          </div>
          <div>
              <p class="hover:bg-gray rounded m-2">Administrar opciones de usuario</p>
              <p class="hover:bg-gray rounded m-2">Cerrar sesión</p>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from "@iconify/vue";
export default defineComponent({
    components: { Icon },
    props: {
        userName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isUserOptionOpen: false,
        }
    }

});
</script>   