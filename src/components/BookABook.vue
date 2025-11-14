<template>
  <div
    v-if="show"
    class="modal-overlay"
    @click="$emit('close')"
  >
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>Book a Book</h2>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      <div class="book-form">
        <div class="form-group">
          <label>Book Title</label>
          <input
            type="text"
            v-model="bookTitle"
            placeholder="Enter book title"
          />
        </div>
        <div class="form-group">
          <label>Author</label>
          <input
            type="text"
            v-model="bookAuthor"
            placeholder="Enter author name"
          />
        </div>
        <div class="form-group">
          <label>Genre</label>
          <select v-model="selectedGenre">
            <option value="">Select Genre</option>
            <option value="ai">AI</option>
            <option value="programming">Programming</option>
            <option value="fiction">Fiction</option>
            <option value="science">Science</option>
          </select>
        </div>
        <div class="form-group">
          <label>Pickup Date</label>
          <input type="date" v-model="pickupDate" />
        </div>
        <div class="form-group">
          <label>Notes (Optional)</label>
          <textarea
            v-model="notes"
            placeholder="Add any special requests or remarks"
          ></textarea>
        </div>
        <div class="form-actions">
          <button class="cancel-btn" @click="$emit('close')">
            Cancel
          </button>
          <button class="confirm-btn" @click="confirmBooking">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookABook",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      selectedGenre: "",
      pickupDate: "",
      notes: "",
    };
  },
  methods: {
    confirmBooking() {
      // Handle booking confirmation
      console.log("Booking confirmed:", {
        title: this.bookTitle,
        author: this.bookAuthor,
        genre: this.selectedGenre,
        pickupDate: this.pickupDate,
        notes: this.notes,
      });

      // Show success message and close form
      alert("Book reservation confirmed!");
      this.$emit('booking-confirmed', {
        title: this.bookTitle,
        author: this.bookAuthor,
        genre: this.selectedGenre,
        pickupDate: this.pickupDate,
        notes: this.notes,
      });

      this.resetForm();
      this.$emit('close');
    },
    resetForm() {
      this.bookTitle = "";
      this.bookAuthor = "";
      this.selectedGenre = "";
      this.pickupDate = "";
      this.notes = "";
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    }
  }
};
</script>

<style scoped>
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  margin: 0;
  color: #333;
  font-size: 1.5rem;
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
}

.close-btn:hover {
  color: #333;
}

.book-form {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
}

.form-group textarea {
  min-height: 80px;
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

.cancel-btn,
.confirm-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cancel-btn {
  background: #f8f9fa;
  color: #666;
  border: 1px solid #ddd;
}

.cancel-btn:hover {
  background: #e9ecef;
}

.confirm-btn {
  background: #136f13;
  color: white;
}

.confirm-btn:hover {
  background: #0d5a0d;
}

/* Responsive */
@media (max-width: 480px) {
  .modal-content {
    width: 95%;
    margin: 20px;
  }
}
</style>
