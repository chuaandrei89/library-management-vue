<template>
  <div class="container" role="main">
    <!-- Status Bar -->
    <div class="status-bar">
      <div class="time">9:41</div>
    </div>

    <!-- Header -->
    <header>
      <h1>Home</h1>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Greeting -->
      <div class="greeting-section">
        <h2>Dear CRYSTAL,</h2>
      </div>

      <!-- Notification Content -->
      <div class="notification-content">
        <p>
          This is a reminder from CSU HERO Libary that you have two books that have not yet been returned:
        </p>

        <ul class="book-list">
          <li><strong>HISTORY</strong> — Due: 10/8/2025</li>
          <li><strong>SCIENCE</strong> — Due: 10/8/2025</li>
        </ul>

        <p>
          Please return these books as soon as possible. Failure to do so may result in your clearance being placed on hold until the items are returned.
        </p>

        <p>
          If you have already returned the books, kindly disregard this notice. For any concerns or questions, you may contact us at caulib@gmail.com
        </p>

        <p class="thank-you">Thank you for your prompt attention.</p>

        <div class="signature">
          <p>Sincerely,</p>
          <p><strong>Andrei O. Chua</strong></p>
          <p>Library HERO Learning</p>
          <p>Ampayon Butuan City | 123345678912</p>
        </div>
      </div>

    </main>
  </div>

  <!-- Navigation Bar -->
  <nav aria-label="Primary navigation">
    <button class="active" aria-current="page">
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
  name: 'Notifications'
}
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #000;
  line-height: 1.6;
}

/* Status Bar */
.status-bar {
  padding: 12px 16px 8px;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #000;
}

/* Container */
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0 80px;
  min-height: 100vh;
}

/* Header */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  text-align: center;
  color: #000;
}

/* Main Content */
.main-content {
  padding: 0 20px;
}

/* Greeting Section */
.greeting-section {
  margin-bottom: 20px;
}

.greeting-section h2 {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

/* Notification Content */
.notification-content {
  margin-bottom: 24px;
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
  padding: 8px 0 16px;
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
  gap: 4px;
  flex: 1;
  padding: 4px;
  transition: color 0.2s ease;
  min-width: 0;
}

nav button.active {
  color: #5FA85F;
  font-weight: 600;
}

nav button svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* Responsive Design */
@media (max-width: 480px) {
  .status-bar {
    padding: 10px 16px 6px;
  }

  header {
    padding: 14px 16px;
  }

  .main-content {
    padding: 0 16px;
  }

  nav {
    padding: 6px 0 14px;
  }

  nav button svg {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 360px) {
  .status-bar {
    padding: 8px 12px 4px;
  }

  header {
    padding: 12px;
  }

  .main-content {
    padding: 0 12px;
  }

  nav button svg {
    width: 20px;
    height: 20px;
  }

  nav button span {
    font-size: 9px;
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
  nav button:active {
    opacity: 0.7;
  }
}
</style>
