<template>
  <div class="onboarding-screen">
    <!-- Progress bar -->
    <div class="progress-container">
      <div class="progress"></div>
      <div class="progress active"></div>
      <div class="progress"></div>
    </div>

    <!-- Main content -->
    <div class="content">
      <img src="@/assets/images/onboarding.png" alt="Personalized Recommendations" class="onboard-image">
      <h1>Track Your Progress<br>recommendations</h1>
      <p>Monitor your activities easily and stay on top of your goals.</p>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button class="next-btn" @click="goToNextPage">Next</button>
      <a class="skip" @click="goToHomePage">Skip</a>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AppOnboarding2',
  setup() {
    const router = useRouter()

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === 'ArrowRight') {
        router.push('/onboarding3')
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })

    return {
      // Methods will be handled in the methods option below
    }
  },
  methods: {
    goToNextPage() {
      this.$router.push('/onboarding3');
    },
    goToHomePage() {
      this.$router.push('/login');  // Changed from '/home' to '/login'
    }
  }
}
</script>

<style scoped src="@/assets/onboarding.css"></style>
