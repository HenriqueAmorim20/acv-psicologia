<script setup lang="ts">
import { Icon } from "@iconify/vue";
const email = ref("");
const password = ref("");
const hide = ref(true);

const user = useFirebaseUser();

const signIn = async () => {
  const credentials = await signInUser(email.value, password.value);
};

const signOut = async () => {
  const result = await signOutUser();
};
</script>

<template>
  <div class="admin">
    <form v-if="!user" @submit.prevent="signIn">
      <PageTitle title="admin" color="var(--secondary)" />
      <div class="form-group">
        <input type="email" class="form-control" id="email" v-model="email" placeholder="email" />
        <Icon class="icon" icon="carbon:email" />
      </div>
      <div class="form-group">
        <input
          :type="hide ? 'password' : 'text'"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="senha" />
        <Icon
          class="icon"
          @click="hide = !hide"
          :icon="hide ? 'ic:outline-visibility-off' : 'ic:outline-visibility'" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-else class="card">
      <PageTitle :title="user.email" color="var(--secondary)" />
      <button @click="signOut()">Logout</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 285px);
  background-color: var(--secondary);

  form,
  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.448);
    margin: 5rem 1rem 0;
    min-width: 400px;

    .form-group {
      position: relative;
      margin-bottom: 1rem;

      &:first-of-type {
        margin-top: 3rem;
      }
      input {
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.128);

        &:focus {
          outline-color: var(--secondary);
        }
      }

      .icon {
        cursor: pointer;
        position: absolute;
        inset: auto 0.5rem auto auto;
        transform: translateY(30%);
        font-size: 1.2rem;
        background-color: #fff;
      }
    }

    button {
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 0.9rem;
      letter-spacing: 3px;
      padding: 0.5rem 2rem;
      transition: 0.3s ease;
      font-family: "WorkSansLight";
      background-color: var(--secondary);
      color: var(--background);
      border: 1px solid var(--secondary);
      border-radius: 20px;
      margin: 2rem 0 0;
    }

    button:hover {
      background-color: var(--background);
      color: var(--secondary);
    }
  }
}
</style>
