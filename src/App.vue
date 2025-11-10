<template>
  <div class="app-container">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="#496b33"
      >
        <path d="M2 6.75A3 3 0 0 1 5 4h3a7 7 0 0 1 7 7v7a3 3 0 0 1-3 3h-3a7 7 0 0 1-7-7V6.75z" />
        <path d="M15 8h4.5a1.5 1.5 0 0 1 0 3H15v-3zM15 14h3.25a1.75 1.75 0 0 1 0 3.5H15v-3.5z" />
      </svg>
    </div>

    <h1>Welcome!</h1>
    <p class="subtitle">Sign in to continue!</p>

    <button class="masao-btn" @click="loginWithMasao">
      <img
        class="masao-logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Maseno_University_Logo.png/220px-Maseno_University_Logo.png"
        alt="MasaoLMS logo"
      />
      Log in with MasaoLMS
    </button>

    <div class="separator">
      <span>or</span>
    </div>

    <form @submit.prevent="submitLogin" class="login-form">
      <input
        type="text"
        placeholder="Username"
        v-model="username"
        required
        autocomplete="username"
      />
      <div class="password-input">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          v-model="password"
          required
          autocomplete="current-password"
        />
        <button type="button" class="toggle-password" @click="togglePassword">
          <svg
            v-if="showPassword"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19.5c-5 0-9-4.5-9-4.5a17.91 17.91 0 014.243-4.243m3.755-2.792a3 3 0 104.243 4.243"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3l18 18M9.88 9.88a3 3 0 013.374 3.374M12 19.5c5 0 9-4.5 9-4.5a17.927 17.927 0 00-2.415-2.8M14.121 14.12L3 3"
            />
          </svg>
        </button>
      </div>
      <p v-if="passwordError" class="error-msg">Password is not valid!</p>

      <button class="login-btn" type="submit">Log in</button>
    </form>

    <div class="footer-links">
      <a href="#" class="forget-password">Forget password?</a>
      <p class="signup-text">
        Don’t have an account?
        <a href="#" class="sign-up">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      passwordError: false,
    }
  },
  methods: {
    loginWithMasao() {
      alert('Log in with MasaoLMS clicked')
      // Implement actual login logic here
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    submitLogin() {
      // Simple validation example: password must be at least 6 characters
      if (this.password.length < 6) {
        this.passwordError = true
      } else {
        this.passwordError = false
        alert(`Logging in as ${this.username}`)
        // Implement login submission logic here
      }
    },
  },
}
</script>

<style scoped>
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
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.separator {
  margin: 0 0 1.25rem 0;
  font-weight: 600;
  font-size: 1rem;
  color: #888;
  user-select: none;
}

.separator span {
  background-color: white;
  padding: 0 0.75rem;
  position: relative;
  top: -0.6rem;
}

.separator::before {
  content: '';
  display: block;
  height: 1px;
  background-color: #ccc;
  position: relative;
  top: 0.5rem;
  width: 100%;
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
  width: 100%;
}

.toggle-password {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
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
  user-select: none;
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
