import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'

const Classification = (props) => {
	const header = [{ name: 'Clasificasion', field: 'name', size: 'large' }]
	return (
		<Table
			id="classifications-table"
			entity="classification"
			header={header}
			items={props.paginatedClassifications}
		>
			<Filter />
		</Table>
	)
}
const mapStateToProps = (state) => {
	return {
		paginatedClassifications: state.paginated.classifications,
	}
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Classification)
