<template>
  <div class="container" role="main">
    <header>
      <h3>Book Genres</h3>
      <div
        class="notification"
        aria-label="Notifications with 1 new notification"
        tabindex="0"
        role="button"
        @click="handleNotificationClick"
      >
        <!-- Bell Icon SVG -->
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <div class="notification-badge" aria-hidden="true">1</div>
      </div>
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

  <!-- Navigation Bar -->
<nav aria-label="Primary navigation">
  <button @click="$router.push('/')">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
    </svg>
    <span>Home</span>
  </button>
  <button class="active" aria-current="page">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 4v16h18V4H3zm14 11h-4v-2h4v2zm0-4h-4V9h4v2zM7 15h4v-2H7v2zm0-4h4V9H7v2z" />
    </svg>
    <span>Genres</span>
  </button>
  <button @click="$router.push('/booking')">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 6h8v2H8zM8 10h8v2H8zM8 14h8v2H8z" />
    </svg>
    <span>Booking</span>
  </button>
  <button @click="$router.push('/lists')">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 6h16v2H4zM4 10h16v2H4zM4 14h16v2H4z" />
    </svg>
    <span>Lists</span>
  </button>
  <button @click="$router.push('/profile')">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 018 0v2" />
    </svg>
    <span>Profile</span>
  </button>
</nav>
</template>

<script>
export default {
  name: 'Genres',
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
    handleNotificationClick() {
      console.log('Notification clicked');
      // Add notification logic here
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

/* Notification */
.notification {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px;
}

.notification svg {
  width: 24px;
  height: 24px;
  stroke: black;
  fill: none;
  stroke-width: 2;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ff3b30;
  color: white;
  font-size: 10px;
  font-weight: 600;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* Navigation Bar */
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  padding: 8px 0 16px;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

nav button {
  background: none;
  border: none;
  font-size: clamp(10px, 2.5vw, 11px);
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  gap: 4px;
  flex: 1;
  padding: 4px;
  transition: color 0.2s ease;
  min-width: 0;
}

nav button.active {
  color: #5FA85F;
  font-weight: 600;
}

nav button svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* Responsive Design */
@media (max-width: 480px) {
  .container {
    padding: 0 12px 80px;
  }

  .genre-content {
    padding: 16px 14px;
  }

  nav {
    padding: 6px 0 14px;
  }

  nav button svg {
    width: 22px;
    height: 22px;
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

  nav button svg {
    width: 20px;
    height: 20px;
  }

  nav button span {
    font-size: 9px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 480px;
    margin: 0 auto;
  }

  nav {
    max-width: 480px;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Touch improvements */
@media (hover: none) and (pointer: coarse) {
  .genre-item:active,
  .notification:active,
  nav button:active {
    opacity: 0.7;
  }
}

/* Focus styles for accessibility */
.genre-item:focus,
.search-input:focus,
nav button:focus {
  outline: 2px solid #5FA85F;
  outline-offset: 2px;
}
</style>
