<template>
  <div class="container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Book_icon_green.svg"
      alt="Logo"
      class="logo"
    />
    <h2 class="welcome-text">Welcome!<br />Sign in to continue!</h2>

    <button class="msalms-btn" @click="loginMasaoLMS">
      <img src="./assets/masaologo.png" alt="MasaoLMS Logo" class="msalms-logo" />
      Log in with MasaoLMS
    </button>

    <div class="separator">or</div>

    <form @submit.prevent="handleLogin" class="login-form" novalidate>
      <input v-model="username" type="text" placeholder="Username" class="input" required />

      <div class="password-wrapper">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          class="input password-input"
          required
          autocomplete="off"
        />
        <button
          type="button"
          class="eye-btn"
          @click="togglePasswordVisibility"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          tabindex="-1"
        >
          <svg
            v-if="showPassword"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 24 24"
            fill="#6c757d"
          >
            <path
              d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 11.001-10.001A5 5 0 0112 17z"
            />
            <circle cx="12" cy="12" r="2.5" fill="#6c757d" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 24 24"
            fill="#6c757d"
          >
            <path
              d="M12 5c-7 0-10 7-10 7 1.5 3 4.4 6 10 6 1.1 0 2.15-.2 3.15-.6M2 2l20 20"
              stroke="#6c757d"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      <p v-if="passwordError" class="error-text">Password is not valid!</p>

      <button type="submit" class="login-btn">Log in</button>
    </form>

    <a href="#" class="forgot-link" @click.prevent="forgotPassword">Forget password?</a>

    <p class="signup-text">
      Don’t have an account?
      <a href="#" class="signup-link" @click.prevent="signUp">Sign up</a>
    </p>
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
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    validatePassword(password) {
      return password.length >= 6 // Adjust validation as needed
    },
    handleLogin() {
      this.passwordError = !this.validatePassword(this.password)
      if (!this.passwordError) {
        alert(`Logged in as ${this.username}`)
      }
    },
    loginMasaoLMS() {
      alert('Logging in with MasaoLMS...')
    },
    forgotPassword() {
      alert('Redirect to forgot password page')
    },
    signUp() {
      alert('Redirect to sign up page')
    },
  },
}
</script>

<style scoped>
.container {
  background: #fff;
  max-width: 320px;
  margin: 50px auto;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 5px rgb(0 0 0 / 0.1);
}

.logo {
  height: 32px;
  margin-bottom: 24px;
}

.welcome-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 32px;
  color: #000;
}

.msalms-btn {
  width: 100%;
  padding: 12px;
  background-color: #d1d1d1;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 32px;
  cursor: pointer;
  user-select: none;
}

.msalms-logo {
  height: 20px;
  width: 20px;
  object-fit: contain;
}

.separator {
  font-weight: normal;
  font-size: 13px;
  color: #9b9b9b;
  margin-bottom: 24px;
}

.login-form {
  width: 100%;
  text-align: left;
}

.input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
  outline-offset: 2px;
  outline-color: #27ae60;
  transition: border-color 0.25s ease;
}

.input:focus {
  border-color: #27ae60;
}

.password-wrapper {
  position: relative;
}

.password-input {
  padding-right: 40px;
}

.eye-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.error-text {
  font-size: 12px;
  color: #cc0000;
  margin: 0 0 12px 4px;
  font-weight: 600;
}

.login-btn {
  width: 100%;
  background-color: #27ae60;
  border: none;
  padding: 14px 0;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #219647;
}

.forgot-link {
  display: block;
  margin: 18px 0 6px;
  font-weight: 600;
  font-size: 13px;
  color: #27ae60;
  cursor: pointer;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

.signup-text {
  font-size: 13px;
  font-weight: 400;
  color: #27ae60;
}

.signup-link {
  color: #cc0000;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  margin-left: 3px;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
