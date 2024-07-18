<template>
  <div class="fee-list">
    <h2>Fees</h2>
    <ul>
      <li>Basic Buyer Fee: ${{ fees.basicBuyerFee }}</li>
      <li>Special Fee: ${{ fees.specialFee }}</li>
      <li>Association Fee: ${{ fees.associationFee }}</li>
      <li>Storage Fee: ${{ fees.storageFee }}</li>
    </ul>
  </div>
</template>

<script>
/**
 * FeeList component
 * 
 * This component displays a list of fees.
 * 
 * @component
 * @example
 * <FeeList :fees="{
 *   basicBuyerFee: 50,
 *   specialFee: 20,
 *   associationFee: 10,
 *   storageFee: 100
 * }" />
 */
export default {
  name: 'FeeList',
  props: {
    /**
     * An object containing fee details.
     * 
     * @type {Object}
     * @property {number} basicBuyerFee - The basic buyer fee
     * @property {number} specialFee - The special fee
     * @property {number} associationFee - The association fee
     * @property {number} storageFee - The storage fee
     */
    fees: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* css for the fee list component */
.fee-list {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fee-list h2 {
  margin-bottom: 10px;
}

.fee-list ul {
  list-style-type: none;
  padding: 0;
}

.fee-list li {
  margin-bottom: 5px;
  font-size: 16px;
}
</style>