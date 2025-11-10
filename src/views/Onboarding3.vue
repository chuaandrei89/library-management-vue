<template>
  <div class="onboarding-screen">
    <!-- Progress bar -->
    <div class="progress-container">
      <div class="progress"></div>
      <div class="progress"></div>
      <div class="progress active"></div>
    </div>

    <!-- Main content -->
    <div class="content">
      <img src="@/assets/images/onboarding3.png" alt="Start Reading" class="onboard-image" />
      <h1>You're All Set!<br />journey today!</h1>
      <p>Get ready to explore and make the most out of your experience.</p>
    </div>

    <!-- Buttons -->
    <div class="buttons">
      <button class="next-btn" @click="goToHomePage">Get Started</button>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AppOnboarding3',
  setup() {
    const router = useRouter()

    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === 'ArrowRight') {
        router.push('/login')
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
    goToHomePage() {
      this.$router.push('/login') // Changed from '/home' to '/login'
    },
  },
}
</script>
<style scoped src="@/assets/onboarding.css"></style>
