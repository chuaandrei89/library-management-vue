<template>
  <div class="onboarding-screen">
    <!-- Progress bar -->
    <div class="progress-container">
      <div class="progress active"></div>
      <div class="progress"></div>
      <div class="progress"></div>
    </div>

    <!-- Main content -->
    <div class="content">
      <img src="../assets/images/onboarding.png" alt="Reading Illustration" class="onboard-image" />
      <h2>Discover a smarter<br />way to read!</h2>
      <p>Access thousands of books anytime,<br />anywhere.</p>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button class="next-btn" @click="goToNextPage">Next</button>
      <a class="skip" @click="goToLoginPage">Skip</a>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: 'AppOnboarding1',
  mounted() {
    this.addKeyListener()
  },
  beforeUnmount() {
    this.removeKeyListener()
  },
  methods: {
    addKeyListener() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    removeKeyListener() {
      document.removeEventListener('keydown', this.handleKeyDown)
    },
    handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === 'ArrowRight') {
        this.goToNextPage()
      }
    },
    goToNextPage() {
      this.$router.push({ name: 'Onboarding2' })
      localStorage.setItem("currentOnboard", "2")
    },
    goToLoginPage() {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

<style scoped>

* {
  font-family: 'Poppins', sans-serif;
}
.onboarding-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  text-align: center;
  box-sizing: border-box;
}

.progress-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 200px;
}

.progress {
  flex: 1;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
}

.progress.active {
  background-color: #2a9314;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 400px;
  margin: 2rem 0;
}

.onboard-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 2rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #1f2937;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  color: #6b7280;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.next-btn {
  width: 100%;
  padding: 0.875rem 1.5rem;
  background-color: #2a9314;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.skip {
  color: #6b7280;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
}

@media (max-width: 480px) {
  .onboarding-screen {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
  }

  .onboard-image {
    max-width: 250px;
  }
}
</style>
