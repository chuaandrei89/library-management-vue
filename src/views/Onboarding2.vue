<template>
  <div class="onboarding-screen">
    <!-- Progress bar -->
    <div class="progress-container">
      <div class="progress"></div>
      <div class="progress active"></div>
      <!-- Fixed: Second step active -->
      <div class="progress"></div>
    </div>

    <!-- Main content -->
    <div class="content">
      <img
        src="@/assets/images/onboarding.png"
        alt="Personalized Recommendations"
        class="onboard-image"
      />
      <h1>Track Your Progress<br />& Recommendations</h1>
      <!-- Fixed: Completed text -->
      <p>Monitor your activities easily and stay on top of your goals.</p>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button class="next-btn" @click="goToNextPage">Next</button>
      <a class="skip" @click="goToLoginPage">Skip</a>
      <!-- Fixed: Skip to login -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppOnboarding2',
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
      this.$router.push({ name: 'Onboarding3' }) // Fixed: Use route name
    },
    goToLoginPage() {
      this.$router.push({ name: 'Login' }) // Fixed: Use route name
    },
  },
}
</script>

<style scoped src="@/assets/onboarding.css"></style>
