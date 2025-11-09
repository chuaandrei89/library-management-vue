<template>
  <div class="login-page">
    <div class="logo" aria-label="Logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M2 6.75A3 3 0 0 1 5 4h3a7 7 0 0 1 7 7v7a3 3 0 0 1-3 3h-3a7 7 0 0 1-7-7V6.75z" />
        <path d="M15 8h4.5a1.5 1.5 0 0 1 0 3H15v-3zM15 14h3.25a1.75 1.75 0 0 1 0 3.5H15v-3.5z" />
      </svg>
    </div>

    <h1>Welcome!</h1>
    <p class="subtitle">Sign in to continue!</p>

    <button class="masao-btn" type="button" aria-label="Log in with MasaoLMS">
      <img src="@/assets/images/masaologo.png" alt="MasaoLMS logo" />
      Log in with MasaoLMS
    </button>

    <div style="position: relative; width: 100%; margin-bottom: 1.5rem">
      <div class="separator-line"></div>
      <div class="separator" style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%)">
        or
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Username" aria-label="Username" required />
      <div class="password-wrapper">
        <input
          type="password"
          placeholder="Password"
          aria-label="Password"
          required
          ref="passwordInput"
        />
        <button
          type="button"
          class="show-password-btn"
          aria-label="Toggle password visibility"
          @click="togglePassword"
        >
          👁️
        </button>
      </div>
      <p class="error-msg" ref="errorMsg" style="display: none">Password is not valid!</p>
      <button type="submit" class="login-btn">Log in</button>
    </form>

    <div class="footer-links">
      <a href="#" class="forget-password">Forget password?</a>
      <p>
        Don’t have an account?
        <a href="#" class="signup">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  methods: {
    togglePassword() {
      const input = this.$refs.passwordInput;
      input.type = input.type === 'password' ? 'text' : 'password';
    },
    handleSubmit() {
      const password = this.$refs.passwordInput.value;
      if (password.length < 6) {
        this.$refs.errorMsg.style.display = 'block';
      } else {
        this.$refs.errorMsg.style.display = 'none';
        alert('Logged in!');
      }
    }
  }
}
</script>

<style scoped>
 body {
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Open Sans', 'Helvetica Neue', sans-serif;
        background: white;
        color: #0a0a0a;
        margin: 0;
        padding: 2rem 1rem;
        max-width: 360px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
      .logo {
        margin-bottom: 1rem;
      }
      .logo svg {
        width: 40px;
        height: 40px;
        fill: #496b33;
      }
      h1 {
        margin: 0;
        font-weight: 900;
      }
      p.subtitle {
        margin: 0.25rem 0 2rem 0;
        font-weight: 600;
        font-size: 1.1rem;
      }
      button.masao-btn {
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
      button.masao-btn img {
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
        display: inline-block;
        padding: 0 10px;
        background: white;
      }
      .separator-line {
        height: 1px;
        width: 100%;
        background-color: #ccc;
        position: relative;
        top: 12px;
        z-index: -1;
        margin-bottom: 1.5rem;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 100%;
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
      .password-wrapper {
        position: relative;
      }
      .show-password-btn {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        user-select: none;
      }
      .error-msg {
        color: #ab1f1f;
        font-size: 0.9rem;
        text-align: left;
        font-weight: 600;
        margin-top: -0.75rem;
        margin-bottom: 0.25rem;
      }
      button.login-btn {
        background-color: #496b33;
        border: none;
        border-radius: 15px;
        padding: 15px 0;
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        margin-top: 0.5rem;
      }
      .footer-links {
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #496b33;
        font-weight: 600;
      }
      .footer-links a {
        color: #496b33;
        text-decoration: none;
        cursor: pointer;
      }
      .footer-links a.signup {
        color: #ab1f1f;
        font-weight: 700;
        margin-left: 0.25rem;
      }
      .footer-links a:hover {
        text-decoration: underline;
      }

</style>
// Implemented by Crystal Sheen Abacajen
