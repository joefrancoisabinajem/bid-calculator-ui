import { createStore } from 'vuex'
import axios from 'axios'
import config from '../config'

/**
 * Vuex store for managing application state related to vehicle fees and total cost.
 * 
 * This store handles state for vehicle fees and total cost, and provides actions to
 * calculate these values by making API requests.
 * 
 * @module store
 */
export default createStore({
  state: {
    /**
     * Object representing various vehicle fees.
     * 
     * @property {number} basicBuyerFee - Fee for the basic buyer.
     * @property {number} specialFee - Special fee applied to the vehicle.
     * @property {number} associationFee - Association fee based on base price.
     * @property {number} storageFee - Storage fee.
     */
    fees: {
      basicBuyerFee: 0,
      specialFee: 0,
      associationFee: 0,
      storageFee: 0
    },
    /**
     * Total cost calculated including all fees and base price.
     * 
     * @property {number} totalCost - The total cost of the vehicle including all fees.
     */
    totalCost: 0
  },
  getters: {
    /**
     * Getter for the fees state.
     * 
     * @param {Object} state - Vuex state.
     * @returns {Object} - The fees object from the state.
     */
    fees: state => state.fees,

    /**
     * Getter for the total cost state.
     * 
     * @param {Object} state - Vuex state.
     * @returns {number} - The total cost from the state.
     */
    totalCost: state => state.totalCost
  },
  mutations: {
    /**
     * Mutation to set the fees in the state.
     * 
     * @param {Object} state - Vuex state.
     * @param {Object} fees - Object containing fee values.
     */
    setFees(state, fees) {
      state.fees = fees
    },

    /**
     * Mutation to set the total cost in the state.
     * 
     * @param {Object} state - Vuex state.
     * @param {number} totalCost - The total cost value.
     */
    setTotalCost(state, totalCost) {
      state.totalCost = totalCost
    }
  },
  actions: {
    /**
     * Action to calculate the total cost by making an API request.
     * 
     * @param {Object} context - Vuex context object.
     * @param {Object} payload - Payload containing base price and vehicle type.
     * @param {number} payload.basePrice - The base price of the vehicle.
     * @param {string} payload.vehicleType - The type of vehicle.
     */
    async calculateTotal({ commit }, { basePrice, vehicleType }) {
      try {
        // Make API request to calculate fees and total cost
        // Get the API base url from the config file
        const response = await axios.post(`${config.apiBaseUrl}/vehicle/calculate`, {
          basePrice,
          vehicleType
        })

        // Extract data from API response
        const { basicBuyerFee, specialFee, associationFee, storageFee, totalCost } = response.data

        // Commit mutations to update state
        commit('setFees', { basicBuyerFee, specialFee, associationFee, storageFee })
        commit('setTotalCost', totalCost)
      } catch (error) {
        console.error('There was an error calculating the total:', error)
      }
    }
  }
})