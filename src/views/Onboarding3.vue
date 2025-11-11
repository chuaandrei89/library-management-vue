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
      <img
        src="../assets/images/onboarding.png"
        alt="Start Reading"
        class="onboard-image"
      />
      <h2>You're All Set!</h2>
      <p>Get ready to explore and make the most out of your experience.</p>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
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
      this.$router.push('/login')
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
