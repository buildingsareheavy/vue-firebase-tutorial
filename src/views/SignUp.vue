<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Sign Up</button>
    <span>
      or go back to
      <router-link to="login">login</router-link>.
    </span>
  </div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.sign-up {
  margin-top: 40px;
}

input {
  margin: 10px auto;
  width: 30%;
  padding: 15px;
  display: block;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 1rem;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>