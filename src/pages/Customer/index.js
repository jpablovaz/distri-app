import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'
const Customer = (props) => {
	const header = [
		{ name: 'Nombre', field: 'name', size: 'large' },
		{ name: 'Apellido', field: 'lastName', size: 'large' },
		{ name: 'R. Social', field: 'businessName', size: 'large' },
		{ name: 'Saldo', field: 'debt', size: 'medium' },
		{ name: 'Telefono', field: 'phone', size: 'medium' },
		{ name: 'Telefono', field: 'phone1', size: 'medium' },
		{ name: 'E-Mail', field: 'email', size: 'large' },
	]
	return (
		<Table
			id="customers-table"
			entity="customer"
			header={header}
			items={props.paginatedCustomers}
		>
			<Filter />
		</Table>
	)
}
const mapStateToProps = (state) => {
	return {
		paginatedCustomers: state.paginated.customers,
	}
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Customer)
