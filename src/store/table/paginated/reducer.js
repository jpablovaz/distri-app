import * as types from './actions'

const initialState = {
	banks: [],
	brands: [],
	classifications: [],
	products: [],
	lists: [],
	users: [],
	sellers: [],
	suppliers: [],
	drivers: [],
	customers: [],
}

const paginatedReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_PAGINATED_USERS: {
			return { ...state, users: action.users }
		}
		case types.SET_PAGINATED_LISTS: {
			return { ...state, lists: action.lists }
		}
		case types.SET_PAGINATED_BANKS: {
			return { ...state, banks: action.banks }
		}
		case types.SET_PAGINATED_BRANDS: {
			return { ...state, brands: action.brands }
		}
		case types.SET_PAGINATED_CLASSIFICATIONS: {
			return { ...state, classifications: action.classifications }
		}
		case types.SET_PAGINATED_PRODUCTS: {
			return { ...state, products: action.products }
		}
		case types.SET_PAGINATED_CUSTOMERS: {
			return { ...state, customers: action.customers }
		}
		case types.SET_PAGINATED_SELLERS: {
			return { ...state, sellers: action.sellers }
		}
		case types.SET_PAGINATED_SUPPLIERS: {
			return { ...state, suppliers: action.suppliers }
		}
		case types.SET_PAGINATED_DRIVERS: {
			return { ...state, drivers: action.drivers }
		}
		default:
			return state
	}
}

export default paginatedReducer
