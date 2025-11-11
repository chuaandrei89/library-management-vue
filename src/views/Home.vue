<template>
  <div class="container" role="main">
    <header>
      <h3>Home</h3>
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
    </header>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Categories scroll -->
    <section class="categories" aria-label="Book categories" tabindex="0">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :class="{ active: category.active, inactive: !category.active }"
        tabindex="0"
        :aria-label="category.name + ' category'"
        @click="selectCategory(category)"
      >
        <img :src="category.image" :alt="category.name" />
        <div class="category-label">{{ category.name }}</div>
      </div>
    </section>

    <!-- Borrowed Books -->
    <section aria-label="Borrowed Books">
      <div class="borrowed-header">
        <h2>Borrowed Books</h2>
        <div
          class="browse-all"
          tabindex="0"
          role="link"
          aria-label="Browse all books"
          @click="browseAllBooks"
        >
          Browse All Books &rarr;
        </div>
      </div>
      <article
        class="borrowed-book"
        tabindex="0"
        aria-label="Borrowed book Computer Engineering. Time 9:00 to 15:00. Location Library REMO learning. Borrowed by Mari Mahnoor."
      >
        <h5>Computer Engineering</h5>
        <div class="borrowed-book-details">
          <span>09:00 - 15:00</span>
          <span>Library REMO learning</span>
        </div>
        <div class="borrowed-book-details">
          <span class="name">Mari Mahnoor</span>
        </div>
      </article>
    </section>

    <!-- Library Updates and Announcements Tabs -->
    <section aria-label="Updates and Announcements">
      <nav class="tabs" role="tablist">
        <button
          role="tab"
          :aria-selected="activeTab === 'library'"
          aria-controls="library-updates"
          id="tab-library"
          class="tab"
          :class="{ active: activeTab === 'library' }"
          tabindex="0"
          @click="switchTab('library')"
        >
          Library Updates
        </button>
        <button
          role="tab"
          :aria-selected="activeTab === 'announcements'"
          aria-controls="announcements"
          id="tab-announcements"
          class="tab"
          :class="{ active: activeTab === 'announcements' }"
          tabindex="-1"
          @click="switchTab('announcements')"
        >
          Announcements
        </button>
      </nav>

      <!-- Library Updates Panel -->
      <div
        id="library-updates"
        role="tabpanel"
        aria-labelledby="tab-library"
        tabindex="0"
        v-if="activeTab === 'library'"
      >
        <article
          v-for="update in libraryUpdates"
          :key="update.id"
          class="card"
          tabindex="0"
        >
          <header class="card-header">
            {{ update.title }}
            <span class="card-date" :class="update.dateClass" :aria-label="'Date ' + update.dateText">
              {{ update.dateText }}
            </span>
          </header>
          <p class="card-body">
            {{ update.description }}
          </p>
        </article>
      </div>

      <!-- Announcements Panel -->
      <div
        id="announcements"
        role="tabpanel"
        aria-labelledby="tab-announcements"
        tabindex="0"
        v-if="activeTab === 'announcements'"
      >
        <p style="font-size: 14px; color: #555;">No announcements available.</p>
      </div>
    </section>
  </div>

  <!-- Navigation Bar -->
<nav aria-label="Primary navigation">
  <button @click="$router.push('/')" class="active" aria-current="page">
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
  name: 'Home',
  data() {
    return {
      activeTab: 'library',
      categories: [
        {
          id: 1,
          name: 'Computer Science',
          image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=400&h=300&q=80',
          active: true
        },
        {
          id: 2,
          name: 'Mathematics',
          image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=300&q=80',
          active: true
        },
        {
          id: 3,
          name: 'History & Geography',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&h=300&q=80',
          active: true
        },
        {
          id: 4,
          name: 'More',
          image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&h=300&q=80',
          active: false
        }
      ],
      libraryUpdates: [
        {
          id: 1,
          title: 'Newly Added Books',
          dateText: 'May 01',
          dateClass: 'may',
          description: 'The library has added new academic and reference books to the collection. Visit the catalog to explore and reserve the latest titles available for borrowing.'
        },
        {
          id: 2,
          title: 'Extended Borrowing Period',
          dateText: 'June 01',
          dateClass: 'june',
          description: 'Students can now enjoy an extended borrowing period for selected course materials. Check your account for updated due dates and renewal options.'
        },
        {
          id: 3,
          title: 'Library System Update',
          dateText: 'May 01',
          dateClass: 'may',
          description: 'The online booking system has been upgraded for faster search and reservation. Experience improved performance and new features.'
        }
      ]
    }
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    selectCategory(category) {
      console.log('Selected category:', category.name);
      // Add your category selection logic here
    },
    browseAllBooks() {
      console.log('Browse all books clicked');
      // Add navigation logic here
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
  margin-bottom: 16px;
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

/* Categories Section */
.categories {
  display: flex;
  overflow-x: auto;
  padding: 16px 0;
  gap: 12px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.categories::-webkit-scrollbar {
  display: none;
}

.category-card {
  min-width: 100px;
  width: 100px;
  height: 140px;
  border-radius: 12px;
  border: 2px solid #5FA85F;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.category-card.inactive {
  border-color: #e0e0e0;
}

.category-card:active {
  transform: scale(0.98);
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding: 8px 6px 6px;
  text-align: center;
}

/* Borrowed Books Section */
.borrowed-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
  margin: 24px 0 16px;
}

.borrowed-header h2 {
  font-weight: 600;
  font-size: clamp(16px, 4vw, 18px);
  margin: 0;
}

.browse-all {
  font-size: clamp(12px, 3vw, 14px);
  color: #5FA85F;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}

.borrowed-book {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  background: #fafafa;
}

.borrowed-book h3 {
  margin: 0 0 12px 0;
  font-weight: 700;
  font-size: clamp(15px, 4vw, 17px);
  color: #333;
}

.borrowed-book-details {
  color: #666;
  font-size: clamp(13px, 3vw, 14px);
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.borrowed-book-details span {
  margin-right: 12px;
}

.borrowed-book-details .name {
  flex: 1 1 100%;
  color: #999;
  font-size: clamp(12px, 3vw, 13px);
  margin-top: 4px;
}

/* Tabs Section */
.tabs {
  display: flex;
  align-items: center;
  font-size: clamp(15px, 4vw, 17px);
  margin: 32px 0 20px;
  gap: 16px;
}

.tab {
  cursor: pointer;
  font-weight: 600;
  padding-bottom: 6px;
  user-select: none;
  background: none;
  border: none;
  color: #666;
  font-size: inherit;
  transition: color 0.2s ease;
}

.tab.active {
  color: #5FA85F;
  border-bottom: 2px solid #5FA85F;
}

/* Cards */
.card {
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  border: 1px solid #f0f0f0;
}

.card-header {
  font-weight: 700;
  font-size: clamp(15px, 4vw, 16px);
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.card-date {
  font-size: 11px;
  border-radius: 12px;
  padding: 4px 10px;
  font-weight: 600;
  user-select: none;
  flex-shrink: 0;
}

.card-date.may {
  background-color: #b3b3e6;
  color: white;
}

.card-date.june {
  background-color: #8ace64;
  color: white;
}

.card-body {
  font-size: clamp(13px, 3vw, 14px);
  line-height: 1.5;
  color: #555;
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
  padding: 12px 0 20px;
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
  gap: 6px;
  flex: 1;
  padding: 4px;
  transition: color 0.2s ease;
}

nav button.active {
  color: #5FA85F;
  font-weight: 600;
}

nav button svg {
  width: 22px;
  height: 22px;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
}

/* Responsive Design */
@media (max-width: 480px) {
  .container {
    padding: 0 12px 80px;
  }

  .category-card {
    min-width: 90px;
    height: 126px;
  }

  .card {
    padding: 16px;
  }

  nav {
    padding: 10px 0 16px;
  }

  nav button {
    font-size: 10px;
  }

  nav button svg {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0 8px 80px;
  }

  .category-card {
    min-width: 80px;
    height: 112px;
  }

  .category-label {
    font-size: 11px;
    padding: 6px 4px 4px;
  }

  .tabs {
    gap: 12px;
  }

  .tab {
    font-size: 14px;
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
  .category-card:active,
  .browse-all:active,
  .tab:active,
  nav button:active {
    opacity: 0.7;
  }

  .notification:active {
    transform: translateY(-50%) scale(0.95);
  }
}
</style>
