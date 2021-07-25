import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const BrandFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setBrandCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.brandCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.brandFiltered])

	return (
		<>
			<div className={styles.title}>MARCAS</div>{' '}
			<div className={styles.filter}>
				{' '}
				{/*<FilterSpace width="40%"></FilterSpace> */}{' '}
				<InputText
					entity="brand"
					width="40%"
					field="name"
					name="Marca"
					value={props.brandCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="brand"
					field="active"
					width="40%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.brandCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.BRAND)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BrandFilter)
