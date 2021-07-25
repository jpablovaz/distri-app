import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'

const Product = (props) => {
	const header = [
		{ name: 'Codigo', field: 'code', size: 'medium', align: 'right' },
		{ name: 'Descripcion', field: 'description', size: 'large' },
		{ name: 'Marca', field: 'brand', size: 'medium' },
		{ name: 'Clasificacion', field: 'classification', size: 'medium' },
		{ name: 'Peso', field: 'unitWeight', size: 'medium', align: 'right' },
		{ name: 'Costo', field: 'cost', size: 'medium', align: 'right' },
		{ name: 'Lista 1', field: 'list1', size: 'medium', align: 'right' },
		{ name: 'Lista 2', field: 'list2', size: 'medium', align: 'right' },
		{ name: 'Lista 3', field: 'list3', size: 'medium', align: 'right' },
		{ name: 'Lista 4', field: 'list4', size: 'medium', align: 'right' },
		{ name: 'Lista 5', field: 'list5', size: 'medium', align: 'right' },
		{ name: 'Lista 6', field: 'list6', size: 'medium', align: 'right' },
		{ name: 'Lista 7', field: 'list7', size: 'medium', align: 'right' },
		{ name: 'Lista 8', field: 'list8', size: 'medium', align: 'right' },
		{ name: 'Lista 9', field: 'list9', size: 'medium', align: 'right' },
		{ name: 'Lista 10', field: 'list10', size: 'medium', align: 'right' },
		{ name: 'Lista 11', field: 'list11', size: 'medium', align: 'right' },
		{ name: 'Lista 12', field: 'list12', size: 'medium', align: 'right' },
		{ name: 'Oferta', field: 'cost', size: 'medium', align: 'right' },
	]
	return (
		<Table
			entity="product"
			id="products-table"
			header={header}
			items={props.paginatedProducts}
		>
			<Filter />
		</Table>
	)
}

const mapStateToProps = (state) => {
	return {
		paginatedProducts: state.paginated.products,
	}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
