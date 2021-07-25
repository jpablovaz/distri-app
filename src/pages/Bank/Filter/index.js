import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const BankFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setBankCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.bankCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.bankFiltered])

	return (
		<>
			<div className={styles.title}>BANCOS</div>
			<div className={styles.filter}>
				<InputText
					entity="bank"
					width="40%"
					field="name"
					name="Banco"
					value={props.bankCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="bank"
					field="active"
					width="40%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.bankCriteria.active}
					run={run}
				></SelectOption>
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.BANK)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BankFilter)
