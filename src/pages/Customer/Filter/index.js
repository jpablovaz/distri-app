import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const CustomerFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setCustomerCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.customerCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.customerFiltered])

	return (
		<>
			<div className={styles.title}>CLIENTES</div>{' '}
			<div className={styles.filter}>
				{' '}
				{/*<FilterSpace width="40%"></FilterSpace> */}{' '}
				<InputText
					entity="customer"
					width="40%"
					field="name"
					name="Cliente"
					value={props.customerCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="customer"
					field="active"
					width="40%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.customerCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.CUSTOMER)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(CustomerFilter)
