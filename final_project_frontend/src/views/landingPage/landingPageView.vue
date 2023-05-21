<template>
    <!-- Evento del momento -->
    <section class="bg-fixed w-full h-[100vh] bg-center bg-no-repeat bg-cover grid place-content-center"
        style="background-image: url('/img/landing_hero.jpg')">
        <LoaderComponent v-if="!hottestEvent" />
        <div v-else>
            <h2 class="text-3xl p-3 md:text-6xl font-bold text-light mb-28">{{ hottestEvent.eventName }}</h2>
            <a href="#nextEvents"><Icon icon="dashicons:arrow-down-alt2" class="m-auto w-24 h-auto bg-faded_gray rounded-full text-dark" /></a>
        </div>
    </section>
    <!-- Próximos eventos -->
    <section id="nextEvents">
        <h2 class="text-center text-3xl mb-4 text-light font-bold">Próximos eventos</h2>
        <EventResultsComponent :eventList="nextEvents" />
    </section>
    <!-- Redes sociales -->
    <section class="px-0">
        <h2 class="text-center text-3xl mb-4 text-light font-bold">Redes sociales</h2>
        <div class="grid grid-cols-3 grid-rows-2 gap-4 text-light">
            <div class="col-start-1 row-start-1 col-span-3 md:col-span-2 bg-gradient-to-b from-red to-dark rounded-tr-full rounded-br-full py-16">
                <p class="text-center px-4 md:text-xl"> <Icon icon="mingcute:youtube-fill" class="h-16 md:h-20 w-auto inline opacity-80"/> Nombre del canal de Youtube</p>
            </div>
            <div class="col-start-1 md:col-start-2 row-start-2 col-span-3 md:col-span-2 bg-gradient-to-b from-blue to-dark rounded-tl-full rounded-bl-full py-16">
                <p class="text-center px-4 md:text-xl"> <Icon icon="fa6-brands:square-facebook" class="h-16 md:h-20 w-auto inline opacity-80"/> Nombre del canal de Facebook</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from "@iconify/vue";
import LoaderComponent from "@/components/generic/LoaderComponent.vue";
import EventResultsComponent from "@/components/generic/EventResultsComponent.vue";
import api from "@/api";


export default defineComponent({
    name: "LandingPageView",
    components: { Icon, LoaderComponent, EventResultsComponent },
    data() {
        return {
            hottestEvent: null,
            nextEvents: [],
        };
    },
    mounted() {
        setTimeout(() => {
            this.hottestEvent = api.GetHottestEvent()
            this.nextEvents = api.GetNextEvents(9)
        }, 5000);
    }
})
</script>