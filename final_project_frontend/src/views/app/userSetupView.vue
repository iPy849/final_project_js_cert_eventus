<template>
    <section>
        <form
        @submit.prevent="sendForm"
        class="form m-auto xs:w-2/3 md:w-1/3"
      >
    <h2 class="text-3xl">Información de usuario:</h2>
    <p class="pb-2">Necesitaremos un poco más de información sobre usted para poder configurar su cuenta de usuario</p>

        <span>
          <label for="formNames">Nombre(s)</label>
          <input
            id="formNames"
            type="text"
            v-model="formNames"
            placeholder="Ingresa tu(s) nombre(s) aquí..."
            required
          />
        </span>
        <span>
            <label for="formLastNames">Apellido(s)</label>
            <input
            id="formLastNames"
            type="text"
            v-model="formLastNames"
            placeholder="Ingresa tu(s) apellido(s) aquí..."
            required
            />
        </span>
        <span>
          <label for="formNames">¿Cómo le gustaría que le llamemos en Eventus?</label>
          <input
            id="formNames"
            type="text"
            v-model="formNickName"
            placeholder="Ingresa tu nickname aquí..."
            required
          />
        </span>
        <span>
          <label for="formBirthDate">Fecha de Nacimiento</label>
          <input
            id="formBirthDate"
            type="date"
            v-model="formBirthDate"
            placeholder="Ingresa tu fecha de nacimiento..."
            required
          />
        </span>
        <span>
          <label >¿Es host de eventos?</label>
          <div>
              <input
              id="registerRepeatPasswordForm"
              type="radio"
              name="isHost"
              value="No"
              v-model="formBirthDate"
              checked
              />
              <label>No</label>
          </div>
          <div>
              <input
              id="registerRepeatPasswordForm"
              type="radio"
              name="isHost"
              value="Si"
              v-model="formBirthDate"
              />
              <label>Si</label>
          </div>
        </span>
        <button type="submit" class="button">Terminar registro</button>
      </form>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            formNames: "",
            formLastNames: "",
            formNickName: "",
            formBirthDate: "",
        };
    },
    methods: {
        sendForm(){

        },
    },
})
</script>
