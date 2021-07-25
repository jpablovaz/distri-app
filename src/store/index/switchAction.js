import * as criteriaActions from '../../store/table/criteria/actions'
import * as filteredActions from '../../store/table/filtered/actions'
import * as paginatedActions from '../../store/table/paginated/actions'
import * as footerActions from '../../store/table/footer/actions'

export const BANK = 'bank'
export const BRAND = 'brand'
export const CLASSIFICATION = 'classification'
export const CUSTOMER = 'customer'
export const DRIVER = 'driver'
export const LIST = 'list'
export const PRODUCT = 'product'
export const USER = 'user'
export const SELLER = 'seller'
export const SUPPLIER = 'supplier'

export const CRITERIA = 'CRITERIA'
export const ENTITY = 'ENTITY'
export const FILTERED = 'FILTERED'
export const PAGINATED = 'PAGINATED'
export const FOOTER = 'FOOTER'

export const getState = (props, actionName) => {
	//alert(props.entity + ' - ' + actionName)
	switch (props.entity) {
		case BANK:
			switch (actionName) {
				case CRITERIA:
					return props.bankCriteria
				case FILTERED:
					return props.bankFiltered
				case PAGINATED:
					return props.bankPaginated
				case FOOTER:
					return props.bankFooter
				default:
					return props.bankEntity
			}
		case BRAND:
			switch (actionName) {
				case CRITERIA:
					return props.brandCriteria
				case FILTERED:
					return props.brandFiltered
				case PAGINATED:
					return props.brandPaginated
				case FOOTER:
					return props.brandFooter
				default:
					return props.brandEntity
			}
		case CLASSIFICATION:
			switch (actionName) {
				case CRITERIA:
					return props.classificationCriteria
				case FILTERED:
					return props.classificationFiltered
				case PAGINATED:
					return props.classificationPaginated
				case FOOTER:
					return props.classificationFooter
				default:
					return props.classificationEntity
			}
		case CUSTOMER:
			switch (actionName) {
				case CRITERIA:
					return props.customerCriteria
				case FILTERED:
					return props.customerFiltered
				case PAGINATED:
					return props.customerPaginated
				case FOOTER:
					return props.customerFooter
				default:
					return props.customerEntity
			}
		case DRIVER:
			switch (actionName) {
				case CRITERIA:
					return props.driverCriteria
				case FILTERED:
					return props.driverFiltered
				case PAGINATED:
					return props.driverPaginated
				case FOOTER:
					return props.driverFooter
				default:
					return props.driverEntity
			}
		case LIST:
			switch (actionName) {
				case CRITERIA:
					return props.listCriteria
				case FILTERED:
					return props.ListFiltered
				case PAGINATED:
					return props.listPaginated
				case FOOTER:
					return props.listFooter
				default:
					return props.listEntity
			}
		case PRODUCT:
			switch (actionName) {
				case CRITERIA:
					return props.productCriteria
				case FILTERED:
					return props.productFiltered
				case PAGINATED:
					return props.productPaginated
				case FOOTER:
					return props.productFooter
				default:
					return props.productEntity
			}
		case SELLER:
			switch (actionName) {
				case CRITERIA:
					return props.sellerCriteria
				case FILTERED:
					return props.sellerFiltered
				case PAGINATED:
					return props.sellerPaginated
				case FOOTER:
					return props.sellerFooter
				default:
					return props.sellerEntity
			}
		case SUPPLIER:
			switch (actionName) {
				case CRITERIA:
					return props.supplierCriteria
				case FILTERED:
					return props.supplierFiltered
				case PAGINATED:
					return props.supplierPaginated
				case FOOTER:
					return props.supplierFooter
				default:
					return props.supplierEntity
			}
		default:
			switch (actionName) {
				case CRITERIA:
					return props.userCriteria
				case FILTERED:
					return props.userFiltered
				case PAGINATED:
					return props.userPaginated
				case FOOTER:
					return props.userFooter
				default:
					return props.userEntity
			}
	}
}
export const setState = (props, actionName, data) => {
	switch (props.entity) {
		case BANK:
			switch (actionName) {
				case CRITERIA:
					props.setBankCriteria(data)
					break
				case FILTERED:
					props.setBankFiltered(data)
					break
				case PAGINATED:
					props.setBankPaginated(data)
					break
				case FOOTER:
					props.setBankFooter(data)
					break
				default:
					props.setBankEntity(data)
			}
			break
		case BRAND:
			switch (actionName) {
				case CRITERIA:
					props.setBrandCriteria(data)
					break
				case FILTERED:
					props.setBrandFiltered(data)
					break
				case PAGINATED:
					props.setBrandPaginated(data)
					break
				case FOOTER:
					props.setBrandFooter(data)
					break
				default:
					props.setBrandEntity(data)
			}
			break
		case CLASSIFICATION:
			switch (actionName) {
				case CRITERIA:
					props.setClassificationCriteria(data)
					break
				case FILTERED:
					props.setClassificationFiltered(data)
					break
				case PAGINATED:
					props.setClassificationPaginated(data)
					break
				case FOOTER:
					props.setClassificationFooter(data)
					break
				default:
					props.setClassificationEntity(data)
			}
			break
		case CUSTOMER:
			switch (actionName) {
				case CRITERIA:
					props.setCustomerCriteria(data)
					break
				case FILTERED:
					props.setCustomerFiltered(data)
					break
				case PAGINATED:
					props.setCustomerPaginated(data)
					break
				case FOOTER:
					props.setCustomerFooter(data)
					break
				default:
					props.setCustomerEntity(data)
			}
			break
		case DRIVER:
			switch (actionName) {
				case CRITERIA:
					props.setDriverCriteria(data)
					break
				case FILTERED:
					props.setDriverFiltered(data)
					break
				case PAGINATED:
					props.setDriverPaginated(data)
					break
				case FOOTER:
					props.setDriverFooter(data)
					break
				default:
					props.setDriverEntity(data)
			}
			break
		case LIST:
			switch (actionName) {
				case CRITERIA:
					props.setListCriteria(data)
					break
				case FILTERED:
					props.setListFiltered(data)
					break
				case PAGINATED:
					props.setListPaginated(data)
					break
				case FOOTER:
					props.setListFooter(data)
					break
				default:
					props.setListEntity(data)
			}
			break
		case PRODUCT:
			switch (actionName) {
				case CRITERIA:
					props.setProductCriteria(data)
					break
				case FILTERED:
					props.setProductFiltered(data)
					break
				case PAGINATED:
					props.setProductPaginated(data)
					break
				case FOOTER:
					props.setProductFooter(data)
					break
				default:
					props.setProductEntity(data)
			}
			break
		case SELLER:
			switch (actionName) {
				case CRITERIA:
					props.setSellerCriteria(data)
					break
				case FILTERED:
					props.setSellerFiltered(data)
					break
				case PAGINATED:
					props.setSellerPaginated(data)
					break
				case FOOTER:
					props.setSellerFooter(data)
					break
				default:
					props.setSellerEntity(data)
			}
			break
		case SUPPLIER:
			switch (actionName) {
				case CRITERIA:
					props.setSupplierCriteria(data)
					break
				case FILTERED:
					props.setSupplierFiltered(data)
					break
				case PAGINATED:
					props.setSupplierPaginated(data)
					break
				case FOOTER:
					props.setSupplierFooter(data)
					break
				default:
					props.setSupplierEntity(data)
			}
			break
		default:
			switch (actionName) {
				case CRITERIA:
					props.setUserCriteria(data)
					break
				case FILTERED:
					alert(props.entity)
					props.setUserFiltered(data)
					break
				case PAGINATED:
					props.setUserPaginated(data)
					break
				case FOOTER:
					props.setUserFooter(data)
					break
				default:
					props.setUserEntity(data)
			}
	}
}

export const generalMapStateToProps = (state, entity = 'user') => {
	return {
		entity: entity,
		bankEntity: state.entities.banks,
		brandEntity: state.entities.brands,
		classificationEntity: state.entities.classifications,
		customerEntity: state.entities.customers,
		driverEntity: state.entities.drivers,
		productEntity: state.entities.products,
		sellerEntity: state.entities.sellers,
		supplierEntity: state.entities.suppliers,

		bankCriteria: state.criteria.banks,
		brandCriteria: state.criteria.brands,
		classificationCriteria: state.criteria.classifications,
		customerCriteria: state.criteria.customers,
		driverCriteria: state.criteria.drivers,
		productCriteria: state.criteria.products,
		sellerCriteria: state.criteria.sellers,
		supplierCriteria: state.criteria.suppliers,

		bankFiltered: state.filtered.banks,
		brandFiltered: state.filtered.brands,
		classificationFiltered: state.filtered.classifications,
		customerFiltered: state.filtered.customers,
		driverFiltered: state.filtered.drivers,
		productFiltered: state.filtered.products,
		sellerFiltered: state.filtered.sellers,
		supplierFiltered: state.filtered.suppliers,

		bankPaginated: state.paginated.banks,
		brandPaginated: state.paginated.brands,
		classificationPaginated: state.paginated.classifications,
		customerPaginated: state.paginated.customers,
		driverPaginated: state.paginated.drivers,
		productPaginated: state.paginated.products,
		sellerPaginated: state.paginated.sellers,
		supplierPaginated: state.paginated.suppliers,

		bankFooter: state.footer.banks,
		brandFooter: state.footer.brands,
		classificationFooter: state.footer.classifications,
		customerFooter: state.footer.customers,
		driverFooter: state.footer.drivers,
		productFooter: state.footer.products,
		sellerFooter: state.footer.sellers,
		supplierFooter: state.footer.suppliers,
	}
}

export const generalMapDispatchToProps = {
	setBankCriteria: criteriaActions.setCriteriaBanks,
	setBrandCriteria: criteriaActions.setCriteriaBrands,
	setClassificationCriteria: criteriaActions.setCriteriaClassifications,
	setCustomerCriteria: criteriaActions.setCriteriaCustomers,
	setDriverCriteria: criteriaActions.setCriteriaDrivers,
	setProductCriteria: criteriaActions.setCriteriaProducts,
	setSellerCriteria: criteriaActions.setCriteriaSellers,
	setSupplierCriteria: criteriaActions.setCriteriaSuppliers,

	setBankFiltered: filteredActions.setFilteredBanks,
	setBrandFiltered: filteredActions.setFilteredBrands,
	setClassificationFiltered: filteredActions.setFilteredClassifications,
	setCustomerFiltered: filteredActions.setFilteredCustomers,
	setDriverFiltered: filteredActions.setFilteredDrivers,
	setProductFiltered: filteredActions.setFilteredProducts,
	setSellerFiltered: filteredActions.setFilteredSellers,
	setSupplierFiltered: filteredActions.setFilteredSuppliers,

	setBankPaginated: paginatedActions.setPaginatedBanks,
	setBrandPaginated: paginatedActions.setPaginatedBrands,
	setClassificationPaginated: paginatedActions.setPaginatedClassifications,
	setCustomerPaginated: paginatedActions.setPaginatedCustomers,
	setDriverPaginated: paginatedActions.setPaginatedDrivers,
	setProductPaginated: paginatedActions.setPaginatedProducts,
	setSellerPaginated: paginatedActions.setPaginatedSellers,
	setSupplierPaginated: paginatedActions.setPaginatedSuppliers,

	setBankFooter: footerActions.setFooterBanks,
	setBrandFooter: footerActions.setFooterBrands,
	setClassificationFooter: footerActions.setFooterClassifications,
	setCustomerFooter: footerActions.setFooterCustomers,
	setDriverFooter: footerActions.setFooterDrivers,
	setProductFooter: footerActions.setFooterProducts,
	setSellerFooter: footerActions.setFooterSellers,
	setSupplierFooter: footerActions.setFooterSuppliers,
}
