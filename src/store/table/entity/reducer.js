import * as types from './actions';

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
		customers: []
};

const entitiesReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.FETCH_USERS: {return {...state, users: action.users}}
		case types.FETCH_LISTS: {return {...state, lists: action.lists}}
		case types.FETCH_BANKS: {return {...state, banks: action.banks}}
		case types.FETCH_BRANDS: {return {...state, brands: action.brands}}
		case types.FETCH_CLASSIFICATIONS: {return {...state, classifications: action.classifications}}
		case types.FETCH_PRODUCTS: {return {...state, products: action.products}}
		case types.FETCH_CUSTOMERS: {return {...state, customers: action.customers}}
		case types.FETCH_SELLERS: {return {...state, sellers: action.sellers}}
		case types.FETCH_SUPPLIERS: {return {...state, suppliers: action.suppliers}}
		case types.FETCH_DRIVERS: {return {...state, drivers: action.drivers}}

		default: return state;
	}
};

export default entitiesReducer;
