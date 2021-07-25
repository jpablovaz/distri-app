import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'

const Brand = (props) => {
	const header = [{ name: 'Marca', field: 'name', size: 'large' }]
	return (
		<Table
			id="brands-table"
			entity="brand"
			header={header}
			items={props.paginatedBrands}
		>
			<Filter />
		</Table>
	)
}
const mapStateToProps = (state) => {
	return {
		paginatedBrands: state.paginated.brands,
	}
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Brand)
