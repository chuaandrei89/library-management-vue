<template>
  <div class="lists-page">
    <!-- Top Bar -->
    <header class="top-bar">
      <h1 class="title">Returned Books</h1>
      <NotificationBell />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </header>

    <!-- Info Bar -->
    <section class="info-bar">
      <span class="total-borrowed">Total Books Borrowed: <strong>10</strong></span>
      <select class="semester-select" aria-label="Select semester" v-model="selectedSemester">
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
      </select>
    </section>

    <!-- Books List Container -->
    <main class="books-list-container" role="list">
      <div
        class="book-card"
        v-for="(book, index) in books"
        :key="index"
        role="listitem"
        tabindex="0"
        :aria-label="`${book.category}, code ${book.code}, number ${book.number}`"
      >
        <span class="category-name">{{ book.category }}</span>
        <span class="code-container" :aria-label="`Code ${book.code}, number ${book.number}`">
          <span class="code">{{ book.code }}</span>
          <span class="number">{{ book.number }}</span>
        </span>
      </div>
    </main>

    <!-- Bottom Navigation Bar - icons only with semicircle indicator -->
    <nav class="bottom-nav" role="navigation" aria-label="Primary">
      <button
        class="nav-btn"
        :class="{ active: activeNav === 'home' }"
        aria-label="Home"
        type="button"
        @click="navigate('home')"
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
        aria-label="Genres"
        type="button"
        @click="navigate('genres')"
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
        aria-current="page"
        aria-label="Lists"
        type="button"
        @click="navigate('lists')"
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
  </div>
</template>

<script>
import NotificationBell from './../components/NotificationBell.vue'

export default {
  name: "Lists",
  components: {
    NotificationBell
  },
  data() {
    return {
      activeNav: 'lists', // Active nav
      selectedSemester: "1",
     books: [
  { category: "Computer Science", code: "TL", number: "2301" },
  { category: "History & Culture", code: "FG", number: "2327" },
  { category: "Mathematics", code: "MD", number: "2328" },
  { category: "Arts & Culture", code: "NL", number: "2395" },
  { category: "Artificial Intelligence", code: "TL", number: "3467" },
  { category: "Physics", code: "RQ", number: "3897" },
  { category: "Literature", code: "BA", number: "3700" },
  { category: "Biology", code: "SC", number: "4150" },
  { category: "Chemistry", code: "CH", number: "3985" },
  { category: "Philosophy", code: "PH", number: "3620" }
],
    };
  },
  methods: {
  navigate(page) {
    this.activeNav = page || 'lists'
    // Use Vue Router to navigate programmatically
    this.$router.push(`/${page}`);
  },
},
};
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
  overflow-x: hidden;
}

/* Main container - FIXED to match other pages */
.lists-page {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 80px;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Top Bar - UPDATED to match Home page */
.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  position: relative;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  width: 100%;
}

.title {
  font-weight: 600;
  font-size: 17px;
  color: black;
  margin: 0;
}

.info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 500;
  color: #000;
  width: 100%;
}

.total-borrowed {
  user-select: none;
}

.semester-select {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 13px;
  padding: 4px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-weight: 600;
  color: #000;
}

.semester-select::-ms-expand {
  display: none;
}

.books-list-container {
  background-color: #184900;
  border-radius: 24px 24px 0 0;
  max-height: 70vh;
  overflow-y: auto;
  padding: 24px 16px 32px;
  width: 100%;
}

/* Scrollbar small and subtle */
.books-list-container::-webkit-scrollbar {
  width: 5px;
}
.books-list-container::-webkit-scrollbar-track {
  background: transparent;
}
.books-list-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.book-card {
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 18px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 14px;
  user-select: none;
  cursor: default;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.07);
  min-height: 40px;
  width: 100%;
}

.category-name {
  max-width: 75%;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.code-container {
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 10px 14px 14px 10px;
  min-width: 70px;
  padding: 6px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  user-select: none;
  justify-content: center;
  align-items: center;
  color: #5E5E5E;
  font-size: 13px;
  font-weight: 600;
  height: 30px;
}

.code {
  color: black;
  font-weight: 700;
  font-size: 13px;
  line-height: 0.9;
}

.number {
  font-weight: 500;
  font-size: 12px;
  color: #7c7c7c;
  line-height: 0.9;
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

/* Responsive Design */
@media (max-width: 480px) {
  .lists-page {
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
  .lists-page {
    padding: 0 8px 80px;
  }
}

@media (min-width: 481px) {
  .lists-page {
    max-width: 480px;
  }
}
</style>
