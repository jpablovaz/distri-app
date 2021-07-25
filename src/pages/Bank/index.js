import React from 'react'
import Table from 'components/Table'
import Filter from './Filter'
import { connect } from 'react-redux'

const Bank = (props) => {
	const header = [{ name: 'Banco', field: 'name', size: 'large' }]
	return (
		<Table
			id="banks-table"
			entity="bank"
			header={header}
			items={props.paginatedBanks}
		>
			<Filter />
		</Table>
	)
}

const mapStateToProps = (state) => {
	return {
		paginatedBanks: state.paginated.banks,
	}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Bank)
