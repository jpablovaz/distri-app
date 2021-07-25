import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const SupplierFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setSupplierCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.supplierCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.supplierFiltered])
	return (
		<>
			<div className={styles.title}>PROVEEDORES</div>
			<div className={styles.filter}>
				<InputText
					entity="supplier"
					width="30%"
					field="lastName"
					name="Apellido"
					value={props.supplierCriteria.lastName}
					run={run}
				></InputText>
				<InputText
					entity="supplier"
					width="30%"
					field="name"
					name="Nombre"
					value={props.supplierCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="supplier"
					field="active"
					width="20%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.supplierCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.SUPPLIER)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(SupplierFilter)
