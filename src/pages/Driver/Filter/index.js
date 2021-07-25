import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const DriverFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		console.log({ ...props.driverCriteria, ...criteria })
		props.setDriverCriteria({ ...props.driverCriteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.driverCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.driverFiltered])

	return (
		<>
			<div className={styles.title}>REPARTIDORES</div>{' '}
			<div className={styles.filter}>
				{' '}
				{/*<FilterSpace width="40%"></FilterSpace> */}{' '}
				<InputText
					entity="driver"
					width="30%"
					field="lastName"
					name="Apellido"
					value={props.driverCriteria.lastName}
					run={run}
				></InputText>
				<InputText
					entity="driver"
					width="30%"
					field="name"
					name="Nombre"
					value={props.driverCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="driver"
					field="active"
					width="20%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.driverCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.DRIVER)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(DriverFilter)
