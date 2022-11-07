<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">
          Nome do Projeto
        </label>
        <input type="text" class="input" v-model="projectName" id="projectName">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/store";
import {ADD_PROJECT, PUT_PROJECT} from "@/store/mutation-type";

export default defineComponent({
  name: 'ProjectFormView',
  data() {
    return {
      projectName: '',
    }
  },
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(proj => proj.id === this.id)
      this.projectName = project?.name || ''
    }
  },
  methods: {
    save() {
      if (this.id) {
        this.store.commit(PUT_PROJECT, {
          id: this.id,
          name: this.projectName
        })
      } else {
        this.store.commit(ADD_PROJECT, this.projectName)
      }

      this.projectName = ''
      this.$router.push('/projects')
    }
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
})
</script>
