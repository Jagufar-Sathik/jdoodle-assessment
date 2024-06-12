<template>
  <div class="gamified-star-rating">
    <div class="star-container">
      <div class="star" v-for="(star, index) in starCount" :key="index" :class="{ active: index < filledStars }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['progress'],
  computed: {
    filledStars() {
      return Math.ceil(this.progress / 20);
    },
    starCount() {
      return 5;
    }
  }
};
</script>

<style scoped>
.gamified-star-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
}

.star-container {
  display: flex;
  gap: 5px;
}

.star {
  width: 30px;
  height: 30px;
  background-color: #ffd700; /* Yellow */
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.star.active {
  transform: scale(1.2); }

.progress-label {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #4caf50;
}
</style>
