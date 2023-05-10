<template>
    <section>
        <h2 class="text-center text-3xl mb-4 text-light font-bold">Sección I</h2>
        <EventResultsComponent :eventList="mockData" />
    </section>
    <section>
        <h2 class="text-center text-3xl mb-4 text-light font-bold">Sección II</h2>
        <EventResultsComponent :eventList="mockData" />
    </section>
    <section>
        <h2 class="text-center text-3xl mb-4 text-light font-bold">Sección III</h2>
        <EventResultsComponent :eventList="mockData" />
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import EventResultsComponent from "@/components/generic/EventResultsComponent.vue";
import api from "@/api";

export default defineComponent({
    name: "mainView",
    components: { EventResultsComponent },
    data() {
        return {
            mockData: [],
        };
    },
    created() {
        // TODO: Quitar este mock
        setTimeout(() => {
            this.mockData = api.GetNextEvents(9)
        }, 5000);
    }
})
</script>