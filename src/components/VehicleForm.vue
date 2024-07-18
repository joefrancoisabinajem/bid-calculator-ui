<template>
  <div class="container">
    <div class="form-group">
      <label for="basePrice">Base Price:</label>
      <input 
        type="number" 
        v-model.number="basePrice" 
        id="basePrice" 
        required 
        class="input-element"
      />
    </div>

    <div class="form-group">
      <label for="vehicleType">Vehicle Type:</label>
      <select 
        v-model="vehicleType" 
        id="vehicleType" 
        required 
        class="input-element"
      >
        <option value="Common">Common</option>
        <option value="Luxury">Luxury</option>
      </select>
    </div>

    <div class="results">
      <FeeList :fees="fees" />
      <TotalCost :totalCost="totalCost" />
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import FeeList from './FeeList.vue'
import TotalCost from './TotalCost.vue'

/**
 * Main component for the vehicle bid calculation.
 * 
 * This component allows users to input the base price and select the vehicle type.
 * It then displays the calculated fees and total cost.
 * 
 * @component
 * @example
 * <VehicleCalculator />
 */
export default {
  components: {
    FeeList,
    TotalCost
  },
  setup() {
    const store = useStore()
    const basePrice = ref(0)
    const vehicleType = ref('Common')

    // Dispatches the action to calculate the total cost based on the base price and vehicle type
    // Handles errors during the calculation process
    const calculateTotal = async () => {
      try {
        await store.dispatch('calculateTotal', {
          basePrice: basePrice.value || 0,
          vehicleType: vehicleType.value
        })
      } catch (error) {
        console.error('There was an error calculating the total:', error)
      }
    }

    // Watch for changes in basePrice or vehicleType and recalculate total everytime
    watch([basePrice, vehicleType], () => {
      calculateTotal()
    }, { immediate: true })

    // Compute fees and totalCost from Vuex store
    const fees = computed(() => store.getters.fees)
    const totalCost = computed(() => store.getters.totalCost)

    return {
      basePrice,
      vehicleType,
      fees,
      totalCost
    }
  }
}
</script>

<style scoped>
/* css for the vehicle form component */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-element {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.results {
  margin-top: 20px;
}

.results h2 {
  margin-bottom: 10px;
}
</style>