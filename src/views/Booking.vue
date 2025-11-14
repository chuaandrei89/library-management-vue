<template>
  <div class="container" role="main">
    <header>
      <h3 class="title">Booking</h3>
      <NotificationBell />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
        <button
          class="plus-btn"
          aria-label="Book a book"
          @click="openBookForm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
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

    <!-- Book a Book Form Modal Overlay -->
    <div
      v-if="showBookForm"
      class="modal-overlay"
      @click="closeBookForm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-form-title"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2 id="booking-form-title">Book a Book</h2>
          <button class="close-btn" @click="closeBookForm" aria-label="Close booking form">×</button>
        </div>
        <form class="book-form" @submit.prevent="confirmBooking" novalidate>
          <div class="form-group">
            <label for="bookTitleInput">Book Title</label>
            <input
              id="bookTitleInput"
              type="text"
              v-model="bookTitle"
              placeholder="Enter book title"
              required
              aria-required="true"
            />
          </div>
          <div class="form-group">
            <label for="bookAuthorInput">Author</label>
            <input
              id="bookAuthorInput"
              type="text"
              v-model="bookAuthor"
              placeholder="Enter author name"
              required
              aria-required="true"
            />
          </div>
          <div class="form-group">
            <label for="genreSelect">Genre</label>
            <select id="genreSelect" v-model="selectedGenre" required aria-required="true">
              <option disabled value="">Select Genre</option>
              <option value="ai">AI</option>
              <option value="programming">Programming</option>
              <option value="fiction">Fiction</option>
              <option value="science">Science</option>
            </select>
          </div>
          <div class="form-group">
            <label for="pickupDateInput">Pickup Date</label>
            <input
              id="pickupDateInput"
              type="date"
              v-model="pickupDate"
              required
              aria-required="true"
            />
          </div>
          <div class="form-group">
            <label for="notesInput">Notes (Optional)</label>
            <textarea
              id="notesInput"
              v-model="notes"
              placeholder="Add any special requests or remarks"
            ></textarea>
          </div>
          <div class="form-actions">
            <button type="button" class="cancel-btn" @click="closeBookForm">Cancel</button>
            <button type="submit" class="confirm-btn">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Booking Confirmation Modal Overlay -->
    <div
      v-if="showConfirmation"
      class="modal-overlay"
      @click="closeConfirmation"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-confirmation-title"
    >
      <div class="modal-content" @click.stop>
        <div class="confirmation-container" role="alert" aria-live="polite">
          <div class="checkmark-circle" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="checkmark-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="3"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="confirmation-details">
            <div class="booking-date">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{{ formattedPickupDate }}</span>
            </div>
            <div class="booking-time">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{{ bookingStartTime }} – {{ bookingEndTime }}</span>
            </div>
          </div>
          <h3 class="thank-you">Thank you!</h3>
          <p class="confirmation-message">
            Your booking is complete. An email with the details of your booking has been sent to you.
          </p>
          <button class="close-confirmation-btn" @click="closeConfirmation" aria-label="Close confirmation">Close</button>
        </div>
      </div>
    </div>
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

    <!-- Genres -->
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

    <!-- Booking -->
    <button
      class="nav-btn"
      :class="{ active: activeNav === 'booking' }"
      aria-current="page"
      aria-label="Booking"
      type="button"
      @click="navigate('booking')"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5fa85f"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon active-icon"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
        class="nav-icon"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        />
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
</template>

<script>
import NotificationBell from "./../components/NotificationBell.vue";

export default {
  name: "Booking",
  components: { NotificationBell },
  data() {
    return {
      activeNav: "booking",
      showBookForm: false,
      showConfirmation: false,
      bookTitle: "",
      bookAuthor: "",
      selectedGenre: "",
      pickupDate: "",
      notes: "",
      bookingStartTime: "4:30 PM",
      bookingEndTime: "5:00 PM",
    };
  },
  computed: {
    formattedPickupDate() {
      if (!this.pickupDate) return "";
      const d = new Date(this.pickupDate);
      return d.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
  methods: {
    navigate(page) {
      this.activeNav = page || "booking";
      this.$router.push(`/${page}`);
    },
    openBookForm() {
      this.showBookForm = true;
    },
    closeBookForm() {
      this.showBookForm = false;
    },
    confirmBooking() {
      if (
        !this.bookTitle.trim() ||
        !this.bookAuthor.trim() ||
        !this.selectedGenre ||
        !this.pickupDate
      ) {
        alert("Please fill out all required fields.");
        return;
      }
      this.showBookForm = false;
      this.showConfirmation = true;
    },
    closeConfirmation() {
      this.showConfirmation = false;
      this.bookTitle = "";
      this.bookAuthor = "";
      this.selectedGenre = "";
      this.pickupDate = "";
      this.notes = "";
    },
  },
};
</script>

<style scoped>
/* All your existing styles plus confirmation modal button styles */
* {
  font-family: "Poppins", sans-serif;
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
  background: #136f13;
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

.plus-btn:hover {
  background: #0d5a0d;
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

/* Modal Overlay Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 24px 30px;
}

/* Modal Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.modal-header h2 {
  margin: 0;
  color: #333;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  line-height: 1;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #333;
}

/* Book Form */
.book-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: inherit;
  font-size: 1rem;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  resize: vertical;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #136f13;
  outline: none;
  box-shadow: 0 0 8px #98c22daa;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
}

.cancel-btn,
.confirm-btn {
  padding: 12px 28px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cancel-btn {
  background-color: #f0f0f0;
  color: #444;
}

.cancel-btn:hover {
  background-color: #ddd;
}

.confirm-btn {
  background-color: #136f13;
  color: white;
}

.confirm-btn:hover {
  background-color: #0f5c10;
}

/* Confirmation Modal Content */
.confirmation-container {
  max-width: 320px;
  margin: 0 auto 0;
  text-align: center;
  user-select: none;
  color: #345f26;
}

.checkmark-circle {
  background-color: #345f26;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark-icon {
  stroke: white;
  width: 28px;
  height: 28px;
}

.confirmation-details {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
}

.booking-date,
.booking-time {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 20px;
  height: 20px;
  stroke: #345f26;
}

.thank-you {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
}

.confirmation-message {
  font-weight: 500;
  font-size: 13px;
  line-height: 1.4;
  padding: 0 8px 24px 8px;
}

/* Confirmation close button */
.close-confirmation-btn {
  background-color: #345f26;
  padding: 10px 24px;
  border-radius: 14px;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgb(52 95 38 / 0.5);
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
}

.close-confirmation-btn:hover {
  background-color: #27441b;
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

  .modal-content {
    width: 95%;
    margin: 20px;
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
