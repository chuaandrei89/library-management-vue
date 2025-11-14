<template>
  <div class="container" role="main">
    <header>
      <h3 class="title">Book Genres</h3>
      <NotificationBell class="notification-bell" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </header>

    <!-- Search Section -->
    <section class="search-section" aria-label="Search genres">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          v-model="searchQuery"
          class="search-input"
          aria-label="Search book genres"
        />
      </div>
    </section>

    <!-- Genres List -->
    <section class="genres-list" aria-label="Book genres list">
      <div
        v-for="genre in filteredGenres"
        :key="genre.id"
        class="genre-item"
        tabindex="0"
        :aria-label="genre.name + ' genre'"
        @click="selectGenre(genre)"
      >
        <div class="genre-content">
          <span class="genre-name">{{ genre.name }}</span>
          <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </section>
  </div>

  <!-- Bottom Navigation Bar - icons only with semicircle indicator -->
  <nav class="bottom-nav" role="navigation" aria-label="Primary">
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'home' }"
      aria-label="Home"
      type="button"
      @click="navigate('')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon"
      >
        <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
      </svg>
      <span class="indicator" v-if="activeNav === 'home'" />
    </button>

    <button
      class="nav-btn"
      :class="{ active: activeNav === 'genres' }"
      aria-current="page"
      aria-label="Genres"
      type="button"
      @click="navigate('genres')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5FA85F"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon active-icon"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="7" y1="4" x2="7" y2="20" />
      </svg>
      <span class="indicator" v-if="activeNav === 'genres'" />
    </button>

    <button
      class="nav-btn"
      :class="{ active: activeNav === 'booking' }"
      aria-label="Booking"
      type="button"
      @click="navigate('booking')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
      <span class="indicator" v-if="activeNav === 'booking'" />
    </button>

        <button
      class="nav-btn"
      :class="{ active: activeNav === 'lists' }"
      aria-label="Lists"
      type="button"
      @click="navigate('lists')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        />
      </svg>
      <span class="indicator" v-if="activeNav === 'lists'" />
    </button>

    <button
      class="nav-btn"
      :class="{ active: activeNav === 'profile' }"
      aria-label="Profile"
      type="button"
      @click="navigate('profile')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6 6 0 0113 0" />
      </svg>
      <span class="indicator" v-if="activeNav === 'profile'" />
    </button>
  </nav>
</template>

<script>
import NotificationBell from './../components/NotificationBell.vue'

export default {
  name: 'Genres',
  components: {
    NotificationBell,
  },
  data() {
    return {
      activeNav: 'genres', // Active nav
      searchQuery: '',
      genres: [
        { id: 1, name: 'Natural Sciences' },
        { id: 2, name: 'History & Geography' },
        { id: 3, name: 'Science & Technology' },
        { id: 4, name: 'Art & Culture' },
        { id: 5, name: 'Literature' },
        { id: 6, name: 'Computer Science' },
        { id: 7, name: 'Calculas' },
        { id: 8, name: 'Physics' },
        { id: 9, name: 'Mathematics' },
      ],
    }
  },
  computed: {
    filteredGenres() {
      if (!this.searchQuery) return this.genres
      const q = this.searchQuery.toLowerCase()
      return this.genres.filter((g) => g.name.toLowerCase().includes(q))
    },
  },
  methods: {
    selectGenre(genre) {
      console.log('Selected genre:', genre.name)
      // Implement your navigation here
    },
    navigate(page) {
      this.activeNav = page || 'genres'
      this.$router.push(`/${page}`)
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #000;
  line-height: 1.4;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 80px;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}

.title {
  font-weight: 600;
  font-size: 17px;
  color: black;
}

.notification-bell {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.search-section {
  margin-bottom: 24px;
}

.search-box {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  stroke: #666;
  stroke-width: 2;
  fill: none;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #f8f9fa;
  font-size: 16px;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #5fa85f;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(95, 168, 95, 0.1);
}

.search-input::placeholder {
  color: #999;
}

.genres-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.genre-item {
  background: white;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid #e0e0e0;
  transition: background-color 0.2s ease;
}

.genre-item:active,
.genre-item:focus {
  background: #479b47;
  color: white;
  outline: none;
}

.genre-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
}

.genre-name {
  font-weight: 500;
  font-size: 16px;
  color: #333;
  transition: color 0.2s ease;
}

.genre-item:active .genre-name,
.genre-item:focus .genre-name {
  color: white;
}

.chevron-icon {
  width: 20px;
  height: 20px;
  stroke: #999;
  stroke-width: 2;
  fill: none;
  transition: stroke 0.2s ease;
}

.genre-item:active .chevron-icon,
.genre-item:focus .chevron-icon {
  stroke: white;
}

/* Bottom Navigation Bar - pill shaped with icons only and semicircle indicator */
.bottom-nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 26px;
  width: 360px;
  height: 56px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
  z-index: 20;
}

.nav-btn {
  position: relative;
  background: none;
  border: none;
  color: #333;
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-btn .nav-icon {
  width: 26px;
  height: 26px;
  stroke: currentColor;
  fill: none;
}

.nav-btn.active {
  color: #136f13;
}

/* Match Booking page active icon color */
.nav-btn.active .nav-icon {
  stroke: #136f13;
}

/* Semicircle indicator below active icon */
.indicator {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 14px;
  background: #136f13;
  border-radius: 14px 14px 0 0;
  box-shadow: 0 3px 6px rgba(95, 168, 95, 0.4);
  z-index: -1;
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 480px) {
  .container {
    padding: 0 12px 80px;
    max-width: 100%;
  }
  .nav-btn {
    width: 44px;
    height: 44px;
  }
  .nav-btn .nav-icon {
    width: 22px;
    height: 22px;
  }
  .indicator {
    bottom: -6px;
    width: 24px;
    height: 12px;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0 8px 80px;
  }
}
</style>
