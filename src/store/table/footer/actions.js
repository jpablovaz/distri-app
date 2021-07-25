export const FOOTER_BANKS = 'FOOTER_BANKS'
export const FOOTER_BRANDS = 'FOOTER_BRANDS'
export const FOOTER_CLASSIFICATIONS = 'FOOTER_CLASSIFICATIONS'
export const FOOTER_PRODUCTS = 'FOOTER_PRODUCTS'
export const FOOTER_USERS = 'FOOTER_USERS'
export const FOOTER_CUSTOMERS = 'FOOTER_CUSTOMERS'
export const FOOTER_DRIVERS = 'FOOTER_DRIVERS'
export const FOOTER_LISTS = 'FOOTER_LISTS'
export const FOOTER_SELLERS = 'FOOTER_SELLERS'
export const FOOTER_SUPPLIERS = 'FOOTER_SUPPLIERS'

export const setFooterBanks = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_BANKS, footer })
}

export const setFooterBrands = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_BRANDS, footer })
}

export const setFooterClassifications = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_CLASSIFICATIONS, footer })
}

export const setFooterProducts = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_PRODUCTS, footer })
}

export const setFooterCustomers = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_CUSTOMERS, footer })
}

export const setFooterSellers = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_SELLERS, footer })
}

export const setFooterSuppliers = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_SUPPLIERS, footer })
}

export const setFooterDrivers = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_DRIVERS, footer })
}

export const setFooterUsers = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_USERS, footer })
}

export const setFooterLists = (footer) => (dispatch) => {
	dispatch({ type: FOOTER_LISTS, footer })
}
