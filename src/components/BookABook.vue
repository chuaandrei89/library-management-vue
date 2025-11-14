<template>
  <div class="book-reservation">
    <div class="reservation-container">
      <!-- Header Section -->
      <header class="reservation-header">
        <h1 class="header-title">Book a Book</h1>
        <p class="header-subtitle">
          Reserve a book from the library collection
        </p>
      </header>

      <!-- Book Information Section -->
      <section class="book-info-section">
        <div class="section-header">
          <h2>Selected Book</h2>
        </div>
        <div class="book-card">
          <div class="book-cover">
            <div class="cover-placeholder">
              <span>CS</span>
            </div>
          </div>
          <div class="book-details">
            <h3 class="book-title">Computer Science Fundamentals</h3>
            <p class="book-author">John M. Keller</p>
            <div class="book-genre">
              <span class="genre-tag">AI</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Pickup Information Section -->
      <section class="pickup-section">
        <div class="section-header">
          <h2>Pickup Details</h2>
        </div>
        <div class="pickup-card">
          <div class="pickup-date">
            <div class="date-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 14H8.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14H12.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 14H16.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 18H8.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 18H12.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 18H16.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="date-info">
              <p class="date-label">Pickup Date</p>
              <p class="date-value">July 6, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Notes Section -->
      <section class="notes-section">
        <div class="section-header">
          <h2>Additional Notes</h2>
          <span class="optional-label">Optional</span>
        </div>
        <div class="notes-card">
          <textarea
            class="notes-input"
            placeholder="Add remarks or special requests..."
            v-model="notes"
          ></textarea>
        </div>
      </section>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="btn-secondary">Cancel</button>
        <button class="btn-primary" @click="confirmBooking">
          Confirm Booking
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookABook",
  data() {
    return {
      notes: "",
    };
  },
  methods: {
    confirmBooking() {
      // Handle booking confirmation logic
      alert("Your booking has been confirmed!");
    },
  },
};
</script>

<style scoped>
.book-reservation {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.reservation-container {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.reservation-header {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header-title {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
}

.header-subtitle {
  margin: 8px 0 0;
  opacity: 0.9;
  font-size: 1.1rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 10px;
  border-bottom: 1px solid #f0f0f0;
}

.section-header h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
}

.optional-label {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

.book-info-section {
  padding: 0 0 20px;
}

.book-card {
  display: flex;
  padding: 20px 30px;
  gap: 20px;
  align-items: flex-start;
}

.book-cover {
  flex-shrink: 0;
}

.cover-placeholder {
  width: 80px;
  height: 100px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.book-details {
  flex-grow: 1;
}

.book-title {
  margin: 0 0 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.book-author {
  margin: 0 0 12px;
  color: #666;
  font-size: 1rem;
}

.book-genre {
  display: inline-block;
}

.genre-tag {
  background: #eef5ff;
  color: #2575fc;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.pickup-section {
  padding: 0 0 20px;
}

.pickup-card {
  padding: 20px 30px;
}

.pickup-date {
  display: flex;
  align-items: center;
  gap: 15px;
}

.date-icon {
  color: #6a11cb;
  display: flex;
  align-items: center;
}

.date-info {
  display: flex;
  flex-direction: column;
}

.date-label {
  margin: 0;
  font-size: 0.9rem;
  color: #888;
}

.date-value {
  margin: 4px 0 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.notes-section {
  padding: 0 0 30px;
}

.notes-card {
  padding: 20px 30px 0;
}

.notes-input {
  width: 100%;
  min-height: 100px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.notes-input:focus {
  outline: none;
  border-color: #6a11cb;
  box-shadow: 0 0 0 2px rgba(106, 17, 203, 0.1);
}

.notes-input::placeholder {
  color: #aaa;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 30px 30px;
  background: #f9f9f9;
  border-top: 1px solid #f0f0f0;
}

.btn-primary,
.btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  box-shadow: 0 4px 10px rgba(106, 17, 203, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(106, 17, 203, 0.4);
}

.btn-secondary {
  background: white;
  color: #666;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #f5f5f5;
}

@media (max-width: 600px) {
  .reservation-container {
    border-radius: 12px;
  }

  .reservation-header {
    padding: 20px;
  }

  .header-title {
    font-size: 1.8rem;
  }

  .section-header,
  .book-card,
  .pickup-card,
  .notes-card,
  .action-buttons {
    padding-left: 20px;
    padding-right: 20px;
  }

  .book-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
