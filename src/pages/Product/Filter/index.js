import React, { useEffect } from 'react'
import InputText from 'components/InputText'
import SelectOption from 'components/SelectOption'
import { filter, paginate } from 'store/table/criteria/filter.js'
import * as actions from 'store/index/switchAction'
import { connect } from 'react-redux'
import styles from 'components/Table/Filter/styles.module.css'

const ProductFilter = (props) => {
	const selectOptionsSale = [
		{ id: '1', content: 'SI' },
		{ id: '2', content: 'NO' },
	]

	const selectOptionsState = [
		{ id: '1', content: 'ALTAS' },
		{ id: '2', content: 'BAJAS' },
	]

	const run = (criteria) => {
		props.setProductCriteria({ ...props.criteria, ...criteria })
	}

	useEffect(() => {
		filter(props)
	}, [props.productCriteria])

	useEffect(() => {
		paginate(props)
	}, [props.productFiltered])

	return (
		<>
			<div className={styles.title}>PRODUCTOS</div>
			<div className={styles.filter}>
				{/*<FilterSpace width="40%"></FilterSpace> */}
				<InputText
					entity="product"
					width="30%"
					field="code"
					number="true"
					name="Codigo"
					value={props.productCriteria.code}
					run={run}
				></InputText>
				<InputText
					entity="product"
					width="30%"
					field="description"
					name="Description"
					value={props.productCriteria.description}
					run={run}
				></InputText>
				<SelectOption
					entity="product"
					field="active"
					width="30%"
					fieldToShow="content"
					name="Estado"
					all="- Todos -"
					options={selectOptionsState}
					value={props.productCriteria.active}
					run={run}
				></SelectOption>
				<SelectOption
					entity="product"
					field="sale"
					width="30%"
					fieldToShow="content"
					name="En Promocion"
					all="- Todos -"
					options={selectOptionsSale}
					value={props.productCriteria.sale}
					run={run}
				></SelectOption>
				<SelectOption
					entity="product"
					field="brand"
					width="30%"
					fieldToShow="name"
					name="Marca"
					all="- Todas -"
					options={props.brandEntity}
					value={props.productCriteria.brand}
					run={run}
				></SelectOption>
				<SelectOption
					entity="product"
					field="classification"
					width="30%"
					fieldToShow="name"
					name="Categoria"
					all="- Todos -"
					options={props.classificationEntity}
					value={props.productCriteria.classification}
					run={run}
				></SelectOption>
				{/*<FilterSpace width="40%"></FilterSpace>*/}
			</div>
		</>
	)
}

const mapStateToProps = (state) =>
	actions.generalMapStateToProps(state, actions.PRODUCT)
const mapDispatchToProps = actions.generalMapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter)
