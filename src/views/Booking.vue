<template>
  <div class="container" role="main">
    <header>
      <h3 class="title">Booking</h3>
      <NotificationBell />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </header>

    <!-- Date Section -->
    <section class="date-section">
      <div class="current-date">
        <span class="date-number">06</span>
        <div class="date-text">
          <div class="month-year">Mon July, 2025</div>
        </div>
      </div>
    </section>

    <!-- Calendar Week -->
    <section class="calendar-week">
      <div class="week-days">
        <span>S</span>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
      </div>
      <div class="week-dates">
        <span>04</span>
        <span>05</span>
        <span class="active">06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
        <span>10</span>
      </div>
    </section>

    <!-- Time Slots Section -->
    <section class="time-slots-section">
      <div class="section-header">
        <div class="header-left">
          <span class="time-header">Time</span>
          <span class="details-header">Details</span>
        </div>
        <button class="plus-btn" aria-label="Book a book" @click="bookABook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      <!-- Time Slot 1 -->
      <div class="time-slot">
        <div class="time-column">
          <span class="time-start">11:35</span>
          <span class="time-end">13:05</span>
        </div>
        <div class="details-column">
          <div class="subject">Computer Science</div>
          <div class="date-time">Mon. July ~ 13:35</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>Left Wing</span>
          </div>
          <div class="instructor">
            <span class="instructor-icon">🖢</span>
            <span>Mam Loba Khalid</span>
          </div>
        </div>
      </div>

      <!-- Time Slot 2 -->
      <div class="time-slot">
        <div class="time-column">
          <span class="time-start">13:15</span>
          <span class="time-end">14:45</span>
        </div>
        <div class="details-column">
          <div class="subject">History</div>
          <div class="date-time">Mon. July ~ 13:15</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>Right Wing</span>
          </div>
          <div class="instructor">
            <span class="instructor-icon">🖢</span>
            <span>Mam Hira</span>
          </div>
        </div>
      </div>

      <!-- Time Slot 3 -->
      <div class="time-slot">
        <div class="time-column">
          <span class="time-start">15:10</span>
          <span class="time-end">16:40</span>
        </div>
        <div class="details-column">
          <div class="subject">Mathematics</div>
          <div class="date-time">Mon. July ~ 15:10</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>Left Wing</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Navigation Bar -->
  <nav class="bottom-nav" role="navigation" aria-label="Primary">
    <!-- Home -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'home' }"
      aria-label="Home"
      type="button"
      @click="navigate('home')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <path d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
      </svg>
      <span class="indicator" v-if="activeNav === 'home'" />
    </button>

    <!-- Genres -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'genres' }"
      aria-label="Genres"
      type="button"
      @click="navigate('genres')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="7" y1="4" x2="7" y2="20" />
      </svg>
      <span class="indicator" v-if="activeNav === 'genres'" />
    </button>

    <!-- Booking -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'booking' }"
      aria-current="page"
      aria-label="Booking"
      type="button"
      @click="navigate('booking')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="#5fa85f" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon active-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
      <span class="indicator" v-if="activeNav === 'booking'" />
    </button>

    <!-- Lists -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'lists' }"
      aria-label="Lists"
      type="button"
      @click="navigate('lists')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <path d="M8 6h8v2H8zM8 10h8v2H8zM8 14h8v2H8z" />
      </svg>
      <span class="indicator" v-if="activeNav === 'lists'" />
    </button>

    <!-- Profile -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'profile' }"
      aria-label="Profile"
      type="button"
      @click="navigate('profile')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
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
  name: 'Booking',
  components: { NotificationBell },
  data() {
    return {
      activeNav: 'booking',  // initial active nav
    }
  },
  methods: {
    navigate(page) {
      this.activeNav = page || 'booking'
      this.$router.push(`/${page}`)
    },
    bookABook() {
      this.$router.push('/book-a-book')
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

/* Container */
.container {
  max-width: 480px;
  width: 100%;
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
  width: 100%;
}

.title {
  font-weight: 600;
  font-size: 17px;
  color: black;
  margin: 0;
}

/* Date Section */
.date-section {
  margin-bottom: 24px;
}

.current-date {
  display: flex;
  align-items: center;
  gap: 12px;
}

.date-number {
  font-size: 32px;
  font-weight: 700;
  color: #80a42a;
}

.month-year {
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

/* Calendar Week */
.calendar-week {
  margin-bottom: 24px;
}

.week-days,
.week-dates {
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
}

.week-days span,
.week-dates span {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
}

.week-days span {
  color: #666;
}

.week-dates span {
  color: #333;
  border-radius: 50%;
}

.week-dates span.active {
  background: #80a42a;
  color: white;
}

/* Time Slots Section */
.time-slots-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
  width: 100%;
}

.header-left {
  display: flex;
  gap: 20px;
}

.time-header {
  min-width: 70px;
}

.plus-btn {
  background:  #136f13;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease;
}

.plus-btn svg {
  width: 20px;
  height: 20px;
  stroke: white;
}

.time-slot {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 20px;
  border: 1px solid #e0e0e0;
  width: 100%;
}

.time-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 70px;
}

.time-start,
.time-end {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.details-column {
  flex: 1;
  width: 100%;
}

.subject {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.date-time {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.location,
.instructor {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.location-icon,
.instructor-icon {
  font-size: 10px;
}

/* Navigation Bar */
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
  color: #424242;
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

.indicator {
  position: absolute;
  bottom: -8px;              /* lowered: negative half of semicircle’s height */
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
    bottom: -6;
    width: 24px;
    height: 12px;
  }
}



@media (max-width: 360px) {
  .container {
    padding: 0 8px 80px;
  }
  .time-slot {
    padding: 12px;
    gap: 16px;
  }
  .date-number {
    font-size: 26px;
  }
  .nav-btn span {
    font-size: 9px;
  }
  .time-column {
    min-width: 60px;
  }
}
</style>
