<template>
  <div>
    <!-- Notification Bell Button -->
    <div
      class="notification-bell"
      aria-label="Notifications with 1 new notification"
      tabindex="0"
      role="button"
      @click="toggleNotifications"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <div class="notification-badge" aria-hidden="true">1</div>
    </div>

    <!-- Notification Overlay and Panel -->
    <div v-if="showNotifications" class="notifications-overlay">
      <!-- Dark gray background overlay -->
      <div class="overlay-background" @click="toggleNotifications"></div>

      <!-- Centered Notification Panel -->
      <div class="notifications-panel" role="alert" aria-live="polite">
        <div class="notification-content">
          <p><strong>Dear CRYSTAL,</strong></p>

          <p>
            This is a reminder from [Library Name] that you have two books that have not yet been returned:
          </p>

          <ul class="book-list">
            <li>HISTORY — Due: 10/9/2025</li>
            <li>SCIENCE — Due: 10/8/2025</li>
          </ul>

          <p>
            Please return those books as soon as possible. Failure to do so may result in your clearance being placed on hold until the items are returned.
          </p>

          <p>
            If you have already returned the books, kindly disregard this notice. For any concerns or questions, you may contact us at csulib@gmail.com
          </p>

          <p>Thank you for your prompt attention.</p>

          <div class="signature">
            <p>Sincerely,</p>
            <p>Andrei O. Chua</p>
            <p>Library HERO Learning</p>
            <p>Ampayan Butuan City | 123345678912</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationBell',
  data() {
    return {
      showNotifications: false
    }
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target) && this.showNotifications) {
        this.showNotifications = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.notification-bell {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px;
}

.notification-bell svg {
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

/* Overlay container */
.notifications-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  padding: 0;
}

/* Dark gray background overlay */
.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* Dark gray background */
  z-index: 999;
  pointer-events: auto; /* Enable clicks to close */
}

/* Centered Notification Panel */
.notifications-panel {
  background-color: #144d14; /* Dark green background */
  color: #d4f8d4; /* Light green text */
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  line-height: 1.5;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Higher than overlay */
  pointer-events: auto; /* enable panel clicks */
  max-height: 80vh;
  overflow-y: auto;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.notification-content p,
.notification-content ul {
  color: #d4f8d4;
  margin-bottom: 12px;
}

.notification-content strong {
  color: #a4d4a4;
  font-weight: 700;
}

.book-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 12px;
}

.book-list li {
  margin-bottom: 8px;
  font-weight: 600;
  color: #d4f8d4;
}

.signature p {
  margin-bottom: 4px;
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 480px) {
  .notifications-panel {
    width: 85%;
    max-width: 350px;
    padding: 20px;
  }
}

@media (max-width: 360px) {
  .notifications-panel {
    width: 80%;
    max-width: 300px;
    padding: 16px;
    font-size: 13px;
  }
}
</style>
