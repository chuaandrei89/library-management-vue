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

    <!-- Bottom Navigation Bar like other pages -->
    <nav class="bottom-nav" role="navigation" aria-label="Primary">
      <button
        class="nav-btn"
        :class="{ active: currentRoute === '/' || currentRoute === '/home' }"
        aria-label="Home"
        @click="navigate('home')"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          class="nav-icon"
          :class="{ 'active-icon': currentRoute === '/' || currentRoute === '/home' }"
        >
          <path
            d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"
          />
        </svg>
        <span class="nav-label">Home</span>
      </button>
      <button
        class="nav-btn"
        :class="{ active: currentRoute === '/genres' }"
        aria-label="Genres"
        @click="navigate('genres')"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          class="nav-icon"
          :class="{ 'active-icon': currentRoute === '/genres' }"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="4" x2="7" y2="20" />
        </svg>
        <span class="nav-label">Genres</span>
      </button>
      <button
        class="nav-btn"
        :class="{ active: currentRoute === '/booking' }"
        aria-label="Booking"
        @click="navigate('booking')"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          class="nav-icon"
          :class="{ 'active-icon': currentRoute === '/booking' }"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="16" y1="2" x2="16" y2="6" />
        </svg>
        <span class="nav-label">Booking</span>
      </button>
      <button
        class="nav-btn"
        :class="{ active: currentRoute === '/lists' }"
        aria-label="Lists"
        @click="navigate('lists')"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          class="nav-icon"
          :class="{ 'active-icon': currentRoute === '/lists' }"
        >
          <path d="M4 6h16v2H4zM4 10h16v2H4zM4 14h16v2H4z" />
        </svg>
        <span class="nav-label">Lists</span>
      </button>
      <button
        class="nav-btn"
        :class="{ active: currentRoute === '/profile' }"
        aria-label="Profile"
        @click="navigate('profile')"
        type="button"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          stroke="#5FA85F"
          stroke-width="2"
          fill="none"
          stroke-linejoin="round"
          stroke-linecap="round"
          class="nav-icon active-icon"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6 6 0 0113 0" />
        </svg>
        <span class="nav-label active-label">Profile</span>
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
  computed: {
    currentRoute() {
      return this.$route.path;
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
      this.$router.push(`/${page}`);
    }
  },
};
</script>

<style scoped>
  /* Use same font for consistency */
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  .profile-page {
    background: #fff;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 16px 70px;
    color: #000;
  }

  /* Header */
  .top-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0 8px;
    position: relative;
    border-bottom: 1px solid #eee;
  }

  .title {
    font-weight: 600;
    font-size: 17px;
    margin: 0;
    text-align: center;
  }

  /* Container content styling */
  .container {
    max-width: 100%;
    margin: 0 auto;
  }

  .profile-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 24px 0 12px 0;
  }

  .profile-pic {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile-info {
    flex: 1;
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
  }

  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 6px;
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

  /* Bottom Navigation Bar */
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

  /* Responsive tweaks */
  @media (max-width: 400px) {
    .profile-header {
      gap: 12px;
    }
    .btn-item {
      font-size: 12px;
      min-width: 90px;
    }
    .nav-btn {
      font-size: 10px;
      width: 48px;
    }
    .nav-btn .nav-icon {
      width: 18px;
      height: 18px;
    }
  }
</style>
