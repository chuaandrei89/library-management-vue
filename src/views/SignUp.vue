<template>
  <div class="container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Book_icon_green.svg"
      alt="Logo"
      class="logo"
    />
         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <h1 class="welcome-text">Create Account</h1>

    <form class="signup-form" @submit.prevent="handleSignUp" novalidate>
      <div class="form-group">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="input"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <div class="password-wrapper">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter password"
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
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm password"
          class="input"
          required
        />
      </div>

      <div v-if="error" class="error-text">{{ error }}</div>

      <button type="submit" class="signup-btn">Sign Up</button>

      <p class="login-link">
        Already have an account?
        <router-link to="/" class="signup-link">Login</router-link>
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
      showPassword: false,
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
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

      if (this.password !== this.confishPassword) {
        this.error = 'Password do not match.'
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
* {
  font-family: 'Poppins', sans-serif;
}
.container {
  background: #fff;
  max-width: 320px;
  margin: 60px auto;
  text-align: center;
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.logo {
  height: 32px;
  margin-bottom: 24px;
}

.welcome-text {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 30px;
  color: #000;
}

.signup-form {
  width: 100%;
  text-align: left;
}

.form-group {
  margin-bottom: 24px; /* Increased from 16px to match login spacing */
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px; /* Increased to match login spacing */
  color: #444;
  font-size: 14px;
}

.input {
  display: block;
  width: 100%;
  padding: 10px 12px;
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
  text-align: left;
}

.signup-btn {
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
  margin-top: 8px;
}

.signup-btn:hover {
  background-color: #219647;
}

.login-link {
  font-size: 13px;
  font-weight: 400;
  color: #27ae60;
  text-align: center;
  margin-top: 18px;
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
