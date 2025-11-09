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
      <img src="@/assets/images/onboarding.png" alt="Reading Illustration" class="onboard-image">
      <h1>Discover a smarter<br>way to read!</h1>
      <p>Access thousands of books anytime,<br>anywhere.</p>
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
  name: 'AppOnboarding2',  // Fixed: Changed from 'AppOnboarding1' to 'AppOnboarding2'
  setup() {
    const router = useRouter()

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === 'ArrowRight') {
        router.push('/onboarding3')  // Fixed: Goes to onboarding3 from onboarding2
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
      this.$router.push('/onboarding3');  // Fixed: Goes to onboarding3 from onboarding2
    },
    goToHomePage() {
      this.$router.push('/login');  // Fixed: Changed from '/home' to '/login'
    }
  }
}
</script>

<style scoped src="@/assets/onboarding.css"></style>
// Added by Crystal Sheen Abacajen
// Crystal Sheen Abacajen
