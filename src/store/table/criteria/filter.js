import * as actions from '../../../store/index/switchAction'
const filtersByName = {}
export const filter = (props) => {
	actions.setState(
		props,
		actions.FILTERED,
		filtersByName[props.entity](
			actions.getState(props, actions.CRITERIA),
			actions.getState(props, actions.ENTITY)
		)
	)
}
export const paginate = (props) => {
	const itemsPerPage = actions.getState(props, actions.FOOTER).itemsPerPage
	const currentPage = actions.getState(props, actions.FOOTER).currentPage
	const items = actions.getState(props, actions.FILTERED)
	const firstItem = itemsPerPage * (currentPage - 1)
	const lastItem = firstItem + itemsPerPage
	const paginated = items.slice(firstItem, lastItem)
	actions.setState(props, actions.PAGINATED, paginated)
}
const classificationFilter = (criteria, classifications) => {
	let filtered = []
	filtered = classifications.filter((p) => {
		return (
			criteria.description === '' ||
			(p.name.startsWith(criteria.name) &&
				(Number(criteria.active) === 0 ||
					(Number(criteria.active) === 1 ? p.active : !p.active)))
		)
	})
	return filtered
}

const brandFilter = (criteria, brands) => {
	let filtered = []
	filtered = brands.filter((p) => {
		return (
			criteria.description === '' ||
			(p.name.startsWith(criteria.name) &&
				(Number(criteria.active) === 0 ||
					(Number(criteria.active) === 1 ? p.active : !p.active)))
		)
	})
	return filtered
}
const bankFilter = (criteria, banks) => {
	let filtered = []
	filtered = banks.filter((p) => {
		return (
			criteria.name === '' ||
			(p.name.startsWith(criteria.name) &&
				(Number(criteria.active) === 0 ||
					(Number(criteria.active) === 1 ? p.active : !p.active)))
		)
	})
	return filtered
}
const supplierFilter = (criteria, customers) => {
	let filtered = []
	filtered = customers.filter((p) => {
		return (
			(criteria.name.trim() === '' ||
				p.name.startsWith(criteria.name.trim())) &&
			(Number(criteria.active) === 0 ||
				(Number(criteria.active) === 1 ? p.active : !p.active))
		)
	})
	return filtered
}
const sellerFilter = (criteria, customers) => {
	let filtered = []
	filtered = customers.filter((p) => {
		return (
			(criteria.lastName.trim() === '' ||
				p.lastName.startsWith(criteria.lastName.trim())) &&
			(criteria.name.trim() === '' ||
				p.name.startsWith(criteria.name.trim())) &&
			(Number(criteria.active) === 0 ||
				(Number(criteria.active) === 1 ? p.active : !p.active))
		)
	})
	return filtered
}
const driverFilter = (criteria, customers) => {
	let filtered = []
	filtered = customers.filter((p) => {
		return (
			(criteria.lastName.trim() === '' ||
				p.lastName.startsWith(criteria.lastName.trim())) &&
			(criteria.name.trim() === '' ||
				p.name.startsWith(criteria.name.trim())) &&
			(Number(criteria.active) === 0 ||
				(Number(criteria.active) === 1 ? p.active : !p.active))
		)
	})
	return filtered
}

const customerFilter = (criteria, customers) => {
	let filtered = []
	filtered = customers.filter((p) => {
		return (
			(criteria.name === '' || p.name.startsWith(criteria.name)) &&
			(Number(criteria.active) === 0 ||
				(Number(criteria.active) === 1 ? p.active : !p.active))
		)
	})
	return filtered
}

const productFilter = (criteria, products) => {
	let filtered = []
	if (criteria.code) {
		const prod = products.find((p) => {
			return p.code === Number(criteria.code)
		})
		if (prod) filtered.push(prod)
	} else {
		filtered = products.filter((p) => {
			return (
				(Number(criteria.brand) === 0 ||
					Number(criteria.brand) === p.brandId) &&
				(Number(criteria.classification) === 0 ||
					Number(criteria.classification) === p.classificationId) &&
				(Number(criteria.active) === 0 ||
					(Number(criteria.active) === 1 ? p.active : !p.active)) &&
				(Number(criteria.sale) === 0 ||
					(Number(criteria.sale) === 1 ? p.sale : !p.sale)) &&
				(criteria.description === '' ||
					p.description.startsWith(criteria.description))
			)
		})
	}
	return filtered
}
filtersByName[actions.CLASSIFICATION] = classificationFilter
filtersByName[actions.BRAND] = brandFilter
filtersByName[actions.BANK] = bankFilter
filtersByName[actions.CUSTOMER] = customerFilter
filtersByName[actions.SELLER] = sellerFilter
filtersByName[actions.SUPPLIER] = supplierFilter
filtersByName[actions.DRIVER] = driverFilter
filtersByName[actions.PRODUCT] = productFilter
