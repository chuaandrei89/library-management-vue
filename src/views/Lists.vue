<template>
  <div class="container" role="main">
    <header>
      <h1>Returned Books</h1>
      <div class="header-info">
        <div class="total-books">Total Books Borrowed: 10</div>
        <div class="semester">Semester</div>
      </div>

    </header>

    <div class="content-section">
      <h2 class="section-title">Computer Science</h2>
      <ul class="category-list">
        <li>History & Culture</li>
        <li>Mathematics</li>
        <li>Arts & Culture</li>
        <li>Artificial Intelligence</li>
        <li>Physics</li>
        <li>Literature</li>
        <li>Home</li>
        <li>Genres</li>
        <li>Booking</li>
        <li>Lists</li>
        <li>Profile</li>
      </ul>
    </div>

    <div class="book-codes-section">
      <div class="book-codes-grid">
        <div class="book-code-item">TL 2301</div>
        <div class="book-code-item">F6 2327</div>
        <div class="book-code-item">MD 2328</div>
        <div class="book-code-item">NL 2395</div>
        <div class="book-code-item">TL 3467</div>
        <div class="book-code-item">RQ 3897</div>
      </div>
    </div>
  </div>

  <!-- Navigation Bar - Same as your Booking page -->
  <nav aria-label="Primary navigation">
    <button @click="$router.push('/')">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
      </svg>
      <span>Home</span>
    </button>
    <button @click="$router.push('/genres')">
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
    <button class="active" aria-current="page">
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
  name: 'Lists'
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
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  position: relative;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 600;
  font-size: clamp(18px, 5vw, 22px);
  margin: 0 0 12px 0;
  text-align: center;
}

.header-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.total-books {
  font-weight: 500;
  font-size: 14px;
}

.semester {
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
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

/* Content Section */
.content-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.category-list {
  list-style-type: none;
}

.category-list li {
  padding: 10px 0;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}

.category-list li:last-child {
  border-bottom: none;
}

/* Book Codes Section */
.book-codes-section {
  margin-top: 24px;
}

.book-codes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.book-code-item {
  background: #5FA85F;
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(95, 168, 95, 0.2);
}

/* Navigation Bar - Same as your Booking page */
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

  .book-codes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .book-code-item {
    padding: 10px 12px;
    font-size: 13px;
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

  .book-codes-grid {
    grid-template-columns: 1fr;
    gap: 8px;
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
  nav button:active {
    opacity: 0.7;
  }
}
</style>
