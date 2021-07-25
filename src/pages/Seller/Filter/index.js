import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const SellerFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setSellerCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.sellerCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.sellerFiltered])

	return (
		<>
			<div className={styles.title}>PREVENTISTAS</div>{' '}
			<div className={styles.filter}>
				{' '}
				{/*<FilterSpace width="40%"></FilterSpace> */}{' '}
				<InputText
					entity="seller"
					width="30%"
					field="lastName"
					name="Apellido"
					value={props.sellerCriteria.lastName}
					run={run}
				></InputText>
				<InputText
					entity="seller"
					width="30%"
					field="name"
					name="Nombre"
					value={props.sellerCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="seller"
					field="active"
					width="20%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.sellerCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.SELLER)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(SellerFilter)
