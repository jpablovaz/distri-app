import axios from 'axios'

export const FETCH_BANKS = 'FETCH_BANKS'
export const FETCH_BRANDS = 'FETCH_BRANDS'
export const FETCH_CLASSIFICATIONS = 'FETCH_CLASSIFICATIONS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
export const FETCH_DRIVERS = 'FETCH_DRIVERS'
export const FETCH_LISTS = 'FETCH_LISTS'
export const FETCH_SELLERS = 'FETCH_SELLERS'
export const FETCH_SUPPLIERS = 'FETCH_SUPPLIERS'

export const fetchBanks = () => (dispatch) => {
	axios
		.get('http://localhost:8090/bank-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_BANKS,
				banks: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchBrands = () => (dispatch) => {
	axios
		.get('http://localhost:8090/brand-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_BRANDS,
				brands: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchClassifications = () => (dispatch) => {
	axios
		.get('http://localhost:8090/classification-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_CLASSIFICATIONS,
				classifications: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchProducts = () => (dispatch) => {
	axios
		.get('http://localhost:8090/product-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_PRODUCTS,
				products: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchCustomers = () => (dispatch) => {
	axios
		.get('http://localhost:8090/customer-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_CUSTOMERS,
				customers: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchSellers = () => (dispatch) => {
	axios
		.get('http://localhost:8090/seller-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_SELLERS,
				sellers: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}
export const fetchSuppliers = () => (dispatch) => {
	axios
		.get('http://localhost:8090/customer-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_SUPPLIERS,
				suppliers: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchDrivers = () => (dispatch) => {
	axios
		.get('http://localhost:8090/driver-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_DRIVERS,
				drivers: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchUsers = () => (dispatch) => {
	axios
		.get('http://localhost:8090/user-query/all')
		.then((response) => {
			dispatch({
				type: FETCH_USERS,
				users: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}

export const fetchLists = () => (dispatch) => {
	axios
		.get('http://localhost:8090/list/all')
		.then((response) => {
			dispatch({
				type: FETCH_LISTS,
				lists: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
}
