<template>
  <div class="container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Book_icon_green.svg"
      alt="Logo"
      class="logo"
    />

    <h1 class="welcome-text">Welcome!<br />Create an account</h1>

    <form class="signup-form" @submit.prevent="handleSignUp">
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Enter password" required />
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" v-model="confirmPassword" placeholder="Confirm password" required />
      </div>

      <div v-if="error" class="error">{{ error }}</div>

      <button type="submit" class="signup-btn">Sign Up</button>

      <p class="login-link">
        Already have an account?
        <router-link to="/">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    }
  },
  methods: {
    handleSignUp() {
      this.error = null

      // Simple validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.email)) {
        this.error = 'Please enter a valid email address.'
        return
      }

      if (this.password.length < 6) {
        this.error = 'Password must be at least 6 characters.'
        return
      }

      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match.'
        return
      }

      // If validation passes, proceed
      alert(`Account created for ${this.email}`)
      this.$router.push('/onboarding1')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  background: #ffffff;
}

.logo {
  width: 80px;
  margin-bottom: 20px;
}

.welcome-text {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.signup-form {
  width: 100%;
  max-width: 320px;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 5px;
  color: #444;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.error {
  color: red;
  margin-bottom: 10px;
  text-align: center;
}

.signup-btn {
  width: 100%;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

.signup-btn:hover {
  background-color: #45a049;
}

.login-link {
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
}
</style>
