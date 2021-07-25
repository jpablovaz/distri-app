export const SET_FILTERED_BANKS = 'SET_FILTERED_BANKS'
export const SET_FILTERED_BRANDS = 'SET_FILTERED_BRANDS'
export const SET_FILTERED_CLASSIFICATIONS = 'SET_FILTERED_CLASSIFICATIONS'
export const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS'
export const SET_FILTERED_USERS = 'SET_FILTERED_USERS'
export const SET_FILTERED_CUSTOMERS = 'SET_FILTERED_CUSTOMERS'
export const SET_FILTERED_DRIVERS = 'SET_FILTERED_DRIVERS'
export const SET_FILTERED_LISTS = 'SET_FILTERED_LISTS'
export const SET_FILTERED_SELLERS = 'SET_FILTERED_SELLERS'
export const SET_FILTERED_SUPPLIERS = 'SET_FILTERED_SUPPLIERS'

export const setFilteredBanks = (banks) => (dispatch) => {
	dispatch({ type: SET_FILTERED_BANKS, banks })
}

export const setFilteredBrands = (brands) => (dispatch) => {
	dispatch({ type: SET_FILTERED_BRANDS, brands })
}

export const setFilteredClassifications = (classifications) => (dispatch) => {
	dispatch({ type: SET_FILTERED_CLASSIFICATIONS, classifications })
}

export const setFilteredProducts = (products) => (dispatch) => {
	dispatch({ type: SET_FILTERED_PRODUCTS, products })
}

export const setFilteredCustomers = (customers) => (dispatch) => {
	dispatch({ type: SET_FILTERED_CUSTOMERS, customers })
}
export const setFilteredSellers = (sellers) => (dispatch) => {
	dispatch({ type: SET_FILTERED_SELLERS, sellers })
}

export const setFilteredSuppliers = (suppliers) => (dispatch) => {
	dispatch({ type: SET_FILTERED_SUPPLIERS, suppliers })
}

export const setFilteredDrivers = (drivers) => (dispatch) => {
	dispatch({ type: SET_FILTERED_DRIVERS, drivers })
}

export const setFilteredUsers = (users) => (dispatch) => {
	dispatch({ type: SET_FILTERED_USERS, users })
}

export const setFilteredLists = (lists) => (dispatch) => {
	dispatch({ type: SET_FILTERED_LISTS, lists })
}
