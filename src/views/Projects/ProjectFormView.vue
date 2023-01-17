<template>
  <section>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { NotificationType } from "@/interfaces/INotification";
import useNotify from "@/hooks/notifier";
import { CREATE_PROJECT, UPDATE_PROJECT } from "@/store/actions-type";

export default defineComponent({
  name: "ProjectFormView",
  data() {
    return {
      projectName: "",
    };
  },
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (proj) => proj.id == this.id
      );
      this.projectName = project?.name || "";
    }
  },
  methods: {
    save() {
      if (this.id) {
        this.store
          .dispatch(UPDATE_PROJECT, {
            id: this.id,
            name: this.projectName,
          })
          .then(() => this.successSave());
      } else {
        this.store
          .dispatch(CREATE_PROJECT, this.projectName)
          .then(() => this.successSave());
      }
    },
    successSave() {
      this.projectName = "";
      this.notify(
        NotificationType.SUCCESS,
        "SUCESSO!",
        "O projeto foi salvo com sucesso!!!"
      );
      this.$router.push("/projects");
    },
  },
  setup() {
    const store = useStore();
    const { notify } = useNotify();
    return {
      store,
      notify,
    };
  },
});
</script>
