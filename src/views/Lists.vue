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

    <!-- Bottom Navigation Bar -->
    <nav class="bottom-nav" role="navigation" aria-label="Primary">
      <button class="nav-btn" aria-label="Home" @click="navigate('home')" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
          <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>
        </svg>
        <span>Home</span>
      </button>
      <button class="nav-btn" aria-label="Genres" @click="navigate('genres')" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <line x1="7" y1="4" x2="7" y2="20"/>
        </svg>
        <span>Genres</span>
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
      <button class="nav-btn active" aria-current="page" aria-label="Lists" @click="navigate('lists')" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="#5FA85F" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon active-icon">
          <path d="M8 6h8v2H8zM8 10h8v2H8zM8 14h8v2H8z" />
        </svg>
        <span class="active-label">Lists</span>
      </button>
      <button class="nav-btn" aria-label="Profile" @click="navigate('profile')" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6 6 0 0113 0" />
        </svg>
        <span>Profile</span>
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
    // Use Vue Router to navigate programmatically
    this.$router.push(`/${page}`);
  },
},
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}

.lists-page {
  background: #fff;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px 70px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #000;
}

.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 8px;
  position: relative;
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
  margin-bottom: 16px; /* Increased spacing between cards */
  font-weight: 600;
  font-size: 14px;
  user-select: none;
  cursor: default;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.07);
  min-height: 40px;
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
  min-width: 70px; /* Even smaller */
  padding: 6px 12px; /* Minimal padding */
  text-align: center;
  display: flex;
  flex-direction: column;
  user-select: none;
  justify-content: center;
  align-items: center;
  color: #5E5E5E;
  font-size: 13px;
  font-weight: 600;
  height: 30px; /* Compact height */
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
</style>
