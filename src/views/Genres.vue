<template>
  <div class="container" role="main">
    <header>
      <h3 class="title">Book Genres</h3>
      <NotificationBell />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </header>

    <!-- Search Section -->
    <section class="search-section" aria-label="Search genres">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
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
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>
    </section>
  </div>

  <!-- Navigation Bar - UPDATED to match Lists page -->
  <nav class="bottom-nav" role="navigation" aria-label="Primary">
    <button class="nav-btn" aria-label="Home" @click="navigate('')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>
      </svg>
      <span>Home</span>
    </button>
    <button class="nav-btn active" aria-current="page" aria-label="Genres" @click="navigate('genres')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="#5FA85F" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon active-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="7" y1="4" x2="7" y2="20"/>
      </svg>
      <span class="active-label">Genres</span>
    </button>
    <button class="nav-btn" aria-label="Booking" @click="navigate('booking')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
      </svg>
      <span>Booking</span>
    </button>
    <button class="nav-btn" aria-label="Lists" @click="navigate('lists')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <path d="M8 6h8v2H8zM8 10h8v2H8zM8 14h8v2H8z" />
      </svg>
      <span>Lists</span>
    </button>
    <button class="nav-btn" aria-label="Profile" @click="navigate('profile')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6 6 0 0113 0" />
      </svg>
      <span>Profile</span>
    </button>
  </nav>
</template>

<script>
import NotificationBell from './../components/NotificationBell.vue'

export default {
  name: 'Genres',
  components: {
    NotificationBell
  },
  data() {
    return {
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
        { id: 9, name: 'Mathematics' }
      ]
    }
  },
  computed: {
    filteredGenres() {
      if (!this.searchQuery) {
        return this.genres;
      }
      const query = this.searchQuery.toLowerCase();
      return this.genres.filter(genre =>
        genre.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    selectGenre(genre) {
      console.log('Selected genre:', genre.name);
      // Add your genre selection logic here
      // this.$router.push(`/genre/${genre.id}`);
    },
    navigate(page) {
      this.$router.push(`/${page}`);
    }
  }
}
</script>

<style scoped>

* {
  font-family: 'Poppins', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.title {
  font-weight: 600;
  font-size: 17px;
  color: black;
  margin: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #fff;
  color: #000;
  line-height: 1.4;
}

/* Container */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px 80px;
  min-height: 100vh;
}

/* Header */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  position: relative;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 600;
  font-size: clamp(18px, 5vw, 22px);
  margin: 0;
  text-align: center;
}

/* Search Section */
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
  font-size: 16px;
  background: #f8f9fa;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #5FA85F;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(95, 168, 95, 0.1);
}

.search-input::placeholder {
  color: #999;
}

/* Genres List */
.genres-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
}

.genre-item {
  background: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
  width: 100%;
}

.genre-item:active {
  background: #f8f9fa;
}

.genre-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  width: 100%;
}

.genre-name {
  font-weight: 500;
  font-size: clamp(15px, 4vw, 16px);
  color: #333;
}

.chevron-icon {
  width: 20px;
  height: 20px;
  stroke: #999;
  stroke-width: 2;
  fill: none;
}

/* Navigation Bar - UPDATED to match Lists page */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  padding: 8px 0 14px;
  box-shadow: 0 -1px 10px rgb(0 0 0 / 0.04);
  z-index: 10;
}

.nav-btn {
  background: none;
  border: none;
  color: #333;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  padding: 0;
  width: 56px;
}

.nav-btn:focus {
  outline: 2px solid #5FA85F;
  outline-offset: 2px;
}

.nav-btn .nav-icon {
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
}

.nav-btn.active,
.nav-btn.active span,
.nav-btn.active .active-icon {
  color: #5FA85F;
  font-weight: 700;
}

.active-icon {
  stroke: #5FA85F;
}

.active-label {
  color: #5FA85F;
  font-weight: 700;
}

/* Your existing responsive design remains the same */
@media (max-width: 480px) {
  .container {
    padding: 0 12px 80px;
  }

  .genre-content {
    padding: 16px 14px;
  }

  .bottom-nav {
    padding: 6px 0 14px;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0 8px 80px;
  }

  .genre-content {
    padding: 14px 12px;
  }

  .genre-name {
    font-size: 14px;
  }

  .nav-btn span {
    font-size: 9px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 480px;
    margin: 0 auto;
  }

  .bottom-nav {
    max-width: 480px;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Touch improvements */
@media (hover: none) and (pointer: coarse) {
  .genre-item:active,
  .nav-btn:active {
    opacity: 0.7;
  }
}

/* Focus styles for accessibility */
.genre-item:focus,
.search-input:focus,
.nav-btn:focus {
  outline: 2px solid #5FA85F;
  outline-offset: 2px;
}
</style>
