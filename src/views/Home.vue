<template>
  <div class="home-page">
    <!-- Top Bar - Matching Lists page style -->
    <header class="top-bar">
      <h3 class="title">Home</h3>
      <NotificationBell />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </header>

    <!-- Rest of your content -->
    <div class="container" role="main">
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

    <!-- Bottom Navigation Bar - Matching Lists page style -->
    <nav class="bottom-nav" role="navigation" aria-label="Primary">
      <button class="nav-btn active" aria-current="page" aria-label="Home" @click="navigate('')" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="#5FA85F" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon active-icon">
          <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>
        </svg>
        <span class="active-label">Home</span>
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
  </div>
</template>

<script>
import NotificationBell from './../components/NotificationBell.vue'

export default {
  name: 'Home',
  components: {
    NotificationBell
  },
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
    },
    browseAllBooks() {
      console.log('Browse all books clicked');
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

.home-page {
  background: #fff;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px 70px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #000;
}

/* Top Bar - Matching Lists page */
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

/* Container */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
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
  border: 2px solid #2a9314;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-card.inactive {
  border-color: #e0e0e0;
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
  font-size: 16px;
  margin: 0;
}

.browse-all {
  font-size: 14px;
  color: #2a9314;
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

.borrowed-book h5 {
  margin: 0 0 12px 0;
  font-weight: 700;
  font-size: 15px;
  color: #333;
}

.borrowed-book-details {
  color: #666;
  font-size: 14px;
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
  font-size: 13px;
  margin-top: 4px;
}

/* Tabs Section */
.tabs {
  display: flex;
  align-items: center;
  font-size: 17px;
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
}

.tab.active {
  color: #2a9314;
  border-bottom: 2px solid #2a9314;
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
  font-size: 16px;
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
  font-size: 14px;
  line-height: 1.5;
  color: #555;
}

/* Bottom Navigation Bar - Matching Lists page */
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
