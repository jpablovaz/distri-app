import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const ClassificationFilter = (props) => {
	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]
	const run = (criteria) => {
		props.setClassificationCriteria({ ...props.criteria, ...criteria })
	}
	useEffect(() => {
		filter(props)
	}, [props.classificationCriteria])
	useEffect(() => {
		paginate(props)
	}, [props.classificationFiltered])
	return (
		<>
			<div className={styles.title}>CLASIFICACIONES</div>{' '}
			<div className={styles.filter}>
				{' '}
				{/*<FilterSpace width="40%"></FilterSpace> */}{' '}
				<InputText
					entity="classification"
					width="40%"
					field="name"
					name="Clasificacion"
					value={props.classificationCriteria.name}
					run={run}
				></InputText>
				<SelectOption
					entity="classification"
					field="active"
					width="40%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.classificationCriteria.active}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}
const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.CLASSIFICATION)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClassificationFilter)
