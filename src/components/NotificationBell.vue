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

    <!-- Notification Overlay Panel -->
    <div v-if="showNotifications" class="notifications-overlay">
      <div class="notifications-panel">
        <div class="notifications-header">
          <h4>Notifications</h4>
          <button @click="toggleNotifications" class="close-btn">&times;</button>
        </div>

        <div class="notification-content">
          <p>
            This is a reminder from CSU HERO Library that you have two books that have not yet been returned:
          </p>

          <ul class="book-list">
            <li><strong>HISTORY</strong> — Due: 10/8/2025</li>
            <li><strong>SCIENCE</strong> — Due: 10/8/2025</li>
          </ul>

          <p>
            Please return these books as soon as possible. Failure to do so may result in your clearance being placed on hold until the items are returned.
          </p>

          <p>
            If you have already returned the books, kindly disregard this notice. For any concerns or questions, you may contact us at esulib@gmail.com
          </p>

          <p class="thank-you">Thank you for your prompt attention.</p>

          <div class="signature">
            <p><strong>Sincerely,</strong></p>
            <p><strong>Andrei O. Chua</strong></p>
            <p>Library HERO Learning</p>
            <p>Ampayan Butuan City | 123346678912</p>
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

/* Overlay Background */
.notifications-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Notification Panel */
.notifications-panel {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notifications-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.notifications-header h4 {
  margin: 0;
  font-weight: 600;
  color: #333;
  font-size: 18px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.close-btn:hover {
  background: #f5f5f5;
}

.notification-content {
  padding: 20px;
}

.notification-content p {
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}

.book-list {
  margin: 16px 0;
  padding-left: 20px;
}

.book-list li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.thank-you {
  margin-top: 20px !important;
  font-weight: 500;
}

.signature {
  margin-top: 24px;
}

.signature p {
  margin-bottom: 4px;
}

</style>
