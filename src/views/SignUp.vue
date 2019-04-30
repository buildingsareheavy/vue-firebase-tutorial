<template>
  <div class="sign-up">
    <p>Let's create a new account!</p>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="signUp">Sign Up</button>
    <span>
      or go back to
      <router-link to="login">login</router-link>.
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      // Note from: https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
      // The createUserWithEmailAndPassword function return a Firebase promise, with an onResolve and onReject callback. You can know more about the different type of Firebase promises here: (https://firebase.google.com/docs/reference/js/firebase.Promise).
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          // eslint-disable-next-line
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
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