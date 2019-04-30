<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Connection</button>
    <p>
      You don't have an account? You can create one
      <router-link to="/sign-up">here</router-link>.
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops." + err.message);
          }
        );
    }
  }
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
