<template>
  <div class="profile-page">
    <!-- Header -->
    <header class="top-bar">
      <h3 class="title">Profile</h3>
      <NotificationBell />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </header>

    <!-- Content -->
    <main class="container" role="main" aria-label="Profile Page Content">
      <section class="profile-header">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Profile picture of Crystal Sheen Abacajen"
          class="profile-pic"
        />
        <div class="profile-info">
          <h3 class="profile-name">Crystal Sheen Abacajen</h3>
          <div class="profile-id">231-00647</div>
          <div class="clear-btn" tabindex="0" @click="clearProfile">Clear</div>
        </div>
      </section>

      <section class="button-group" aria-label="Program and year status">
        <div class="btn-item" tabindex="0">BSIS Program</div>
        <div class="btn-item" tabindex="0">3rd Year student</div>
      </section>

      <section class="statistics-card" aria-label="Student statistics">
        <div class="stats-header">
          <div>Statistics</div>
          <div class="active-badge">Active</div>
        </div>
        <div class="stats-date">Monday, 06 June 2024</div>
        <div class="stats-items">
          <div
            class="stat-item"
            tabindex="0"
            aria-label="Borrow history 90 percent"
          >
            <div class="icon-circle icon-borrow" aria-hidden="true">
              <svg class="stat-icon" viewBox="0 0 24 24">
                <path
                  d="M13 16h-1v-4h-1m4 2h-6m8 0a2 2 0 110-4 2 2 0 010 4z"
                />
                <path d="M7 8h1v4h1" />
              </svg>
            </div>
            <div class="stat-text">Borrow History</div>
            <div class="stat-percent">90%</div>
          </div>
          <div
            class="stat-item"
            tabindex="0"
            aria-label="Reserved books 70 percent"
          >
            <div class="icon-circle icon-reserved" aria-hidden="true">
              <svg class="stat-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div class="stat-text">Reserved Books</div>
            <div class="stat-percent">70%</div>
          </div>
          <div
            class="stat-item"
            tabindex="0"
            aria-label="Returned books 85 percent"
          >
            <div class="icon-circle icon-returned" aria-hidden="true">
              <svg class="stat-icon" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div class="stat-text">Returned Books</div>
            <div class="stat-percent">85%</div>
          </div>
        </div>
      </section>

      <section class="dashboard-card" aria-label="Profile options">
        <div
          class="dashboard-item"
          role="button"
          tabindex="0"
          aria-label="Settings"
          @click="goToSettings"
        >
          <svg
            class="dashboard-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              d="M12 2v2M12 20v2M20 12h-2M4 12H2M17.66 17.66l-1.41-1.41M6.34 6.34L4.93 4.93M17.66 6.34l-1.41 1.41M6.34 17.66l-1.41 1.41"
            />
          </svg>
          Setting
          <svg
            class="dashboard-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
        <div
          class="dashboard-item"
          role="button"
          tabindex="0"
          aria-label="Favorites"
          @click="goToFavorites"
        >
          <svg
            class="dashboard-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
          Favorites
          <svg
            class="dashboard-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
        <div
          class="dashboard-item"
          role="button"
          tabindex="0"
          aria-label="Log Out"
          @click="logout"
        >
          <svg
            class="dashboard-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M16 17l5-5-5-5M21 12H9M13 17v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v2"
            />
          </svg>
          Log Out
          <svg
            class="dashboard-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </section>
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
          <path d="M8 6h8v2H8zM8 10h8v2H8zM8 14h8v2H8z" />
        </svg>
        <span class="indicator" v-if="activeNav === 'lists'" />
      </button>

      <button
        class="nav-btn"
        :class="{ active: activeNav === 'profile' }"
        aria-current="page"
        aria-label="Profile"
        type="button"
        @click="navigate('profile')"
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
  name: 'Profile',
  components: {
    NotificationBell
  },
  data() {
    return {
      activeNav: 'profile', // Active nav
    }
  },
  methods: {
    clearProfile() {
      console.log('Clear clicked');
    },
    goToSettings() {
      this.$router.push('/settings');
    },
    goToFavorites() {
      this.$router.push('/favorites');
    },
    logout() {
      console.log('Log Out clicked');
      this.$router.push('/login');
    },
    navigate(page) {
      this.activeNav = page || 'profile'
      this.$router.push(`/${page}`)
    }
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

/* Main container - FIXED to match navbar width */
.profile-page {
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 80px;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Header */
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
  margin: 0;
  text-align: center;
  color: black;
}

/* Container content styling */
.container {
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0 12px 0;
  width: 100%;
}

.profile-pic {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
  width: 100%;
}

.profile-name {
  font-weight: 500;
  font-size: 17.5px;
  margin: 0 0 4px 0;
}

.profile-id {
  font-size: 13px;
  color: #555;
}

.clear-btn {
  display: inline-block;
  margin-top: 6px;
  padding: 2px 10px;
  background-color: #b8d6b8;
  color: #2c662c;
  font-weight: 600;
  font-size: 12px;
  border-radius: 12px;
  user-select: none;
  cursor: pointer;
}

.button-group {
  display: flex;
  gap: 16px;
  justify-content: start;
  margin: 16px 0 24px 0;
  flex-wrap: wrap;
  width: 100%;
}

.btn-item {
  border: 1.7px solid #9baf9b;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 13px;
  color: #4a6b4a;
  user-select: none;
  cursor: default;
  min-width: 110px;
  text-align: center;
}

.statistics-card {
  border: 1.7px solid #9baf9b;
  border-radius: 16px;
  padding: 16px 20px 18px 20px;
  margin-bottom: 24px;
  background: #f7f9f7;
  width: 100%;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 6px;
  width: 100%;
}

.stats-date {
  font-weight: 400;
  font-size: 12px;
  color: #7c7c7c;
  margin-bottom: 12px;
}

.active-badge {
  background-color: #9be170;
  color: #2c5502;
  padding: 4px 13px;
  font-weight: 700;
  font-size: 13px;
  border-radius: 14px;
  user-select: none;
}

.stats-items {
  display: flex;
  justify-content: space-around;
  gap: 22px;
  flex-wrap: wrap;
  width: 100%;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 80px;
  text-align: center;
}

.icon-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-borrow {
  background: #facb00;
}

.icon-returned {
  background: #f46b2b;
}

.icon-reserved {
  background: #8561c5;
}

svg.stat-icon {
  width: 20px;
  height: 20px;
  stroke: white;
  stroke-width: 2;
  fill: none;
}

.stat-text {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  user-select: none;
}

.stat-percent {
  font-size: 12px;
  font-weight: 600;
  color: #666;
  user-select: none;
}

.dashboard-card {
  border: 1.7px solid #9baf9b;
  border-radius: 16px;
  padding: 0;
  background: #f7f9f7;
  width: 100%;
}

.dashboard-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease-in-out;
  width: 100%;
}

.dashboard-item:not(:last-child) {
  border-bottom: 1px solid #cdd7cd;
}

.dashboard-item:hover,
.dashboard-item:focus {
  background-color: #e6f1e6;
  outline: none;
}

.dashboard-icon {
  width: 24px;
  height: 24px;
  stroke-width: 2;
  stroke: #5fa85f;
  fill: none;
}

.dashboard-arrow {
  margin-left: auto;
  width: 16px;
  height: 16px;
  stroke: #8a8a8a;
  stroke-width: 2;
  fill: none;
}

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
  color: #136f13; /* Green color for active icon */
}

.nav-btn.active .nav-icon {
  stroke: #136f13; /* Green stroke for active icon */
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

/* Responsive adjustments */
@media (max-width: 480px) {
  .bottom-nav {
    width: 100%;
    max-width: 360px;
    height: 48px;
    padding: 0 12px;
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
  .bottom-nav {
    padding: 0 8px;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
  }

  .nav-btn .nav-icon {
    width: 20px;
    height: 20px;
  }

  .indicator {
    bottom: -6px;
    width: 24px;
    height: 12px;
  }
}


@media (max-width: 360px) {
  .profile-page {
    padding: 0 8px 80px;
  }
}

@media (min-width: 481px) {
  .profile-page {
    max-width: 480px;
  }
}

/* Touch improvements */
@media (hover: none) and (pointer: coarse) {
  .dashboard-item:active,
  .nav-btn:active {
    opacity: 0.7;
  }
}

/* Focus styles for accessibility */
.dashboard-item:focus,
.nav-btn:focus,
.btn-item:focus,
.stat-item:focus {
  outline: 2px solid #5FA85F;
  outline-offset: 2px;
}

/* Prevent horizontal scroll and ensure proper containment */
html, body {
  overflow-x: hidden;
  width: 100%;
}

</style>
