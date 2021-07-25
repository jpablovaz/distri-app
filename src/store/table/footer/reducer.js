import * as types from './actions'

const initialState = {
	banks: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	brands: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	classifications: {
		itemsPerPage: 10,
		currentPage: 1,
		totalPages: 1,
		totalItems: 0,
	},
	products: {
		itemsPerPage: 10,
		currentPage: 1,
		totalPages: 1,
		totalItems: 0,
	},
	lists: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	users: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	sellers: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	suppliers: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	drivers: { itemsPerPage: 10, currentPage: 1, totalPages: 1, totalItems: 0 },
	customers: {
		itemsPerPage: 10,
		currentPage: 1,
		totalPages: 1,
		totalItems: 0,
	},
}

const footerReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FOOTER_USERS: {
			return { ...state, users: action.users }
		}
		case types.FOOTER_LISTS: {
			return { ...state, lists: action.lists }
		}
		case types.FOOTER_BANKS: {
			return { ...state, banks: { ...state.banks, ...action.footer } }
		}
		case types.FOOTER_BRANDS: {
			return { ...state, brands: { ...state.brands, ...action.footer } }
		}
		case types.FOOTER_CLASSIFICATIONS: {
			return {
				...state,
				classifications: { ...state.classifications, ...action.footer },
			}
		}
		case types.FOOTER_PRODUCTS: {
			return {
				...state,
				products: { ...state.products, ...action.footer },
			}
		}
		case types.FOOTER_CUSTOMERS: {
			return {
				...state,
				customers: { ...state.customers, ...action.footer },
			}
		}
		case types.FOOTER_SELLERS: {
			return { ...state, sellers: { ...state.sellers, ...action.footer } }
		}
		case types.FOOTER_DRIVERS: {
			return { ...state, drivers: { ...state.drivers, ...action.footer } }
		}

		default:
			return state
	}
}

export default footerReducer
