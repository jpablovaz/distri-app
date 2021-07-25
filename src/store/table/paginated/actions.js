export const SET_PAGINATED_BANKS = 'SET_PAGINATED_BANKS'
export const SET_PAGINATED_BRANDS = 'SET_PAGINATED_BRANDS'
export const SET_PAGINATED_CLASSIFICATIONS = 'SET_PAGINATED_CLASSIFICATIONS'
export const SET_PAGINATED_PRODUCTS = 'SET_PAGINATED_PRODUCTS'
export const SET_PAGINATED_USERS = 'SET_PAGINATED_USERS'
export const SET_PAGINATED_CUSTOMERS = 'SET_PAGINATED_CUSTOMERS'
export const SET_PAGINATED_DRIVERS = 'SET_PAGINATED_DRIVERS'
export const SET_PAGINATED_LISTS = 'SET_PAGINATED_LISTS'
export const SET_PAGINATED_SELLERS = 'SET_PAGINATED_SELLERS'
export const SET_PAGINATED_SUPPLIERS = 'SET_PAGINATED_SUPPLIERS'

export const setPaginatedBanks = (banks) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_BANKS,
		banks,
	})
}

export const setPaginatedBrands = (brands) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_BRANDS,
		brands,
	})
}

export const setPaginatedClassifications = (classifications) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_CLASSIFICATIONS,
		classifications,
	})
}

export const setPaginatedProducts = (products) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_PRODUCTS,
		products,
	})
}

export const setPaginatedCustomers = (customers) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_CUSTOMERS,
		customers,
	})
}

export const setPaginatedSellers = (sellers) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_SELLERS,
		sellers,
	})
}

export const setPaginatedSuppliers = (suppliers) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_SUPPLIERS,
		suppliers,
	})
}

export const setPaginatedDrivers = (drivers) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_DRIVERS,
		drivers,
	})
}

export const setPaginatedUsers = (users) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_USERS,
		users,
	})
}

export const setPaginatedLists = (lists) => (dispatch) => {
	dispatch({
		type: SET_PAGINATED_LISTS,
		lists,
	})
}
