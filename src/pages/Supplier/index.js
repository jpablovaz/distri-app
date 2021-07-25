import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'

const Supplier = (props) => {
	const header = [
		{ name: 'Apellido', field: 'lastName', size: 'large' },
		{ name: 'Nombre', field: 'name', size: 'large' },
		{ name: 'Telefono', field: 'phone', size: 'medium' },
		{ name: 'Telefono', field: 'phone1', size: 'medium' },
		{ name: 'E-Mail', field: 'email', size: 'large' },
	]
	return (
		<Table
			id="suppliers-table"
			entity="supplier"
			header={header}
			items={props.paginatedSuppliers}
		>
			<Filter />
		</Table>
	)
}
const mapStateToProps = (state) => {
	return {
		paginatedSuppliers: state.paginated.suppliers,
	}
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Supplier)
