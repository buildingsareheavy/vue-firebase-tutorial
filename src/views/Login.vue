<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button>Connection</button>
    <p>You don't have an account? You can create one</p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.login {
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
