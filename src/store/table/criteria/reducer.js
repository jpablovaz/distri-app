import * as types from './actions'

const initialState = {
	banks: { name: '', active: '1' },
	brands: { name: '', active: '1' },
	classifications: { name: '', active: '1' },
	products: {
		description: '',
		code: '',
		active: '1',
		sale: '0',
		brand: '0',
		classification: '0',
	},
	lists: {},
	users: {},
	sellers: { name: '', lastName: '', active: '1' },
	suppliers: { name: '', lastName: '', active: '1' },
	drivers: { name: '', lastName: '', active: '2' },
	customers: { name: '', active: '1' },
}

const criteriaReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CRITERIA_USERS: {
			return { ...state, users: action.users }
		}
		case types.CRITERIA_LISTS: {
			return { ...state, lists: action.lists }
		}
		case types.CRITERIA_BANKS: {
			return { ...state, banks: { ...state.banks, ...action.criteria } }
		}
		case types.CRITERIA_BRANDS: {
			return {
				...state,
				brands: { ...state.brands, ...action.criteria },
			}
		}
		case types.CRITERIA_CLASSIFICATIONS: {
			return {
				...state,
				classifications: {
					...state.classifications,
					...action.criteria,
				},
			}
		}
		case types.CRITERIA_PRODUCTS: {
			return {
				...state,
				products: { ...state.products, ...action.criteria },
			}
		}
		case types.CRITERIA_CUSTOMERS: {
			return {
				...state,
				customers: { ...state.customers, ...action.criteria },
			}
		}
		case types.CRITERIA_SELLERS: {
			return {
				...state,
				sellers: { ...state.sellers, ...action.criteria },
			}
		}
		case types.CRITERIA_SUPPLIERS: {
			return {
				...state,
				suppliers: { ...state.suppliers, ...action.criteria },
			}
		}
		case types.CRITERIA_DRIVERS: {
			console.log(action.criteria)
			return {
				...state,
				drivers: { ...state.drivers, ...action.criteira },
			}
		}
		default:
			return state
	}
}

export default criteriaReducer
