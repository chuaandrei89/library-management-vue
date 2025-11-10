<template>
  <div class="app-container">
    <!-- Logo -->
    <div class="logo">
      <img :src="bookLogo" alt="App Logo" class="logo-img" />
    </div>

    <h1>Welcome!</h1>
    <p class="subtitle">Sign in to continue!</p>

    <!-- MasaoLMS Login -->
    <button class="masao-btn" @click="loginWithMasao">
      <img src="@/assets/masaologo.png" alt="MasaoLMS logo" class="masao-logo" />
      Log in with MasaoLMS
    </button>

    <div class="separator"><span>or</span></div>

    <!-- Login Form -->
    <form @submit.prevent="submitLogin" class="login-form">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        required
        autocomplete="username"
      />
      <div class="password-input">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          required
          autocomplete="current-password"
        />
        <button type="button" class="toggle-password" @click="togglePassword">👁️</button>
      </div>
      <p v-if="passwordError" class="error-msg">Password is not valid!</p>
      <button type="submit" class="login-btn">Log in</button>
    </form>

    <!-- Footer Links -->
    <div class="footer-links">
      <router-link to="/forgot" class="forget-password">Forgot password?</router-link>
      <!-- Fixed: Typo -->
      <p class="signup-text">
        Don’t have an account?
        <router-link to="/signup" class="sign-up">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import bookLogo from '@/assets/book.png'

export default {
  data() {
    return {
      bookLogo,
      username: '',
      password: '',
      showPassword: false,
      passwordError: false,
    }
  },
  methods: {
    loginWithMasao() {
      alert('Log in with MasaoLMS clicked')
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    submitLogin() {
      if (this.password.length < 6) {
        this.passwordError = true
      } else {
        this.passwordError = false
        alert(`Logging in as ${this.username}`)
        // Navigate, e.g., this.$router.push({ name: 'Home' })
      }
    },
  },
}
</script>

<style scoped>
/* Converted from original HTML styles, scoped for Vue */
.app-container {
  max-width: 360px;
  margin: auto;
  padding: 2rem 1rem;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: #0a0a0a;
  text-align: center;
}

.logo {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.logo-img {
  width: 60px;
  height: 60px;
}

h1 {
  margin: 0;
  font-weight: 900;
}

.subtitle {
  margin: 0.25rem 0 2rem 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.masao-btn {
  width: 100%;
  background-color: #ccc;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-size: 1.1rem;
  color: #000;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  user-select: none;
}

.masao-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.separator {
  margin: 0 0 1.25rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: #888;
  user-select: none;
  position: relative;
}

.separator::before {
  content: '';
  display: block;
  height: 1px;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: -1;
}

.separator span {
  background-color: white;
  padding: 0 10px;
  position: relative;
  z-index: 1;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input[type='text'],
input[type='password'] {
  border: 1px solid #888;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

.error-msg {
  color: #ab1f1f;
  font-size: 0.9rem;
  margin: -0.75rem 0 0 0;
  text-align: left;
  font-weight: 600;
}

.login-btn {
  background-color: #496b33;
  border: none;
  border-radius: 15px;
  padding: 15px 0;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.footer-links {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #496b33;
  font-weight: 600;
}

.forget-password {
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #496b33;
  text-decoration: none;
}

.forget-password:hover {
  text-decoration: underline;
}

.signup-text {
  font-weight: 400;
  color: #496b33;
}

.sign-up {
  color: #ab1f1f;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.sign-up:hover {
  text-decoration: underline;
}
</style>
