export const CRITERIA_BANKS = 'CRITERIA_BANKS'
export const CRITERIA_BRANDS = 'CRITERIA_BRANDS'
export const CRITERIA_CLASSIFICATIONS = 'CRITERIA_CLASSIFICATIONS'
export const CRITERIA_PRODUCTS = 'CRITERIA_PRODUCTS'
export const CRITERIA_USERS = 'CRITERIA_USERS'
export const CRITERIA_CUSTOMERS = 'CRITERIA_CUSTOMERS'
export const CRITERIA_DRIVERS = 'CRITERIA_DRIVERS'
export const CRITERIA_LISTS = 'CRITERIA_LISTS'
export const CRITERIA_SELLERS = 'CRITERIA_SELLERS'
export const CRITERIA_SUPPLIERS = 'CRITERIA_SUPPLIERS'

export const setCriteriaBanks = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_BANKS, criteria })
}

export const setCriteriaBrands = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_BRANDS, criteria })
}

export const setCriteriaClassifications = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_CLASSIFICATIONS, criteria })
}

export const setCriteriaProducts = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_PRODUCTS, criteria })
}

export const setCriteriaCustomers = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_CUSTOMERS, criteria })
}

export const setCriteriaSellers = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_SELLERS, criteria })
}

export const setCriteriaSuppliers = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_SUPPLIERS, criteria })
}

export const setCriteriaDrivers = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_DRIVERS, criteria })
}

export const setCriteriaUsers = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_USERS, criteria })
}

export const setCriteriaLists = (criteria) => (dispatch) => {
	dispatch({ type: CRITERIA_LISTS, criteria })
}
