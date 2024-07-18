<template>
  <div class="total-cost">
    <h2>Total</h2>
    <p>${{ totalCost }}</p>
  </div>
</template>

<script>
/**
 * TotalCost component
 * 
 * This component displays the total cost value.
 * 
 * @component
 * @example
 * <TotalCost :totalCost="1234.56" />
 */
export default {
  name: 'TotalCost',
  props: {
    /**
     * The total cost to be displayed.
     * 
     * @type {Number}
     * @default 0
     */
    totalCost: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
/* css for the total cost component */
.total-cost {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.total-cost h2 {
  margin-bottom: 10px;
}

.total-cost p {
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
}
</style>