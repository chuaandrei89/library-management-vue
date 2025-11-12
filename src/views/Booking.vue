<template>
  <div class="container" role="main">
    <header>
     <h3 class="title">Booking</h3>
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
        <span>Time</span>
        <span>Details</span>
      </div>

      <!-- Time Slot 1 -->
      <div class="time-slot">
        <div class="time-range">
          <span class="time">11:35</span>
          <span class="time">13:05</span>
        </div>
        <div class="slot-details">
          <div class="subject">Computer Science</div>
          <div class="date-time">Mon, July ~ 13:35</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>left Wing</span>
          </div>
          <div class="instructor">
            <span class="instructor-icon">🖢</span>
            <span>Monn Lobba Khalid</span>
          </div>
        </div>
      </div>

      <!-- Time Slot 2 -->
      <div class="time-slot">
        <div class="time-range">
          <span class="time">13:15</span>
          <span class="time">14:45</span>
        </div>
        <div class="slot-details">
          <div class="subject">History</div>
          <div class="date-time">Mon, July ~ 13:15</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>Right Wing</span>
          </div>
          <div class="instructor">
            <span class="instructor-icon">🖢</span>
            <span>Monn Hiro</span>
          </div>
        </div>
      </div>

      <!-- Time Slot 3 -->
      <div class="time-slot">
        <div class="time-range">
          <span class="time">15:10</span>
          <span class="time">16:40</span>
        </div>
        <div class="slot-details">
          <div class="subject">Mathematics</div>
          <div class="date-time">Mon, July ~ 15~10</div>
          <div class="location">
            <span class="location-icon">@</span>
            <span>left Wing</span>
          </div>
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
    <button class="nav-btn" aria-label="Genres" @click="navigate('genres')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="7" y1="4" x2="7" y2="20"/>
      </svg>
      <span>Genres</span>
    </button>
    <button class="nav-btn active" aria-current="page" aria-label="Booking" @click="navigate('booking')" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="#5FA85F" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" class="nav-icon active-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
      </svg>
      <span class="active-label">Booking</span>
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
export default {
  name: 'Booking',
  methods: {
    handleNotificationClick() {
      console.log('Notification clicked');
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
/* Header - FIXED */
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
  color:#80a42a;
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

.week-days, .week-dates {
  display: flex;
  justify-content: space-between;
  padding: 0 4px;
}

.week-days span, .week-dates span {
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
  background:#80a42a;
  color: white;
}

/* Time Slots Section */
.time-slots-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
}

.time-slot {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 16px;
  border: 1px solid #e0e0e0;
}

.time-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 60px;
}

.time {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.slot-details {
  flex: 1;
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

.location, .instructor {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.location-icon, .instructor-icon {
  font-size: 10px;
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

  .time-slot {
    padding: 14px;
  }

  .bottom-nav {
    padding: 6px 0 14px;
  }
}

@media (max-width: 360px) {
  .container {
    padding: 0 8px 80px;
  }

  .time-slot {
    padding: 12px;
  }

  .date-number {
    font-size: 28px;
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
  .time-slot:active,
  .nav-btn:active {
    opacity: 0.7;
  }
}
</style>
