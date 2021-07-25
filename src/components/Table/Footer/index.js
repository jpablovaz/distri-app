import React, { useEffect } from 'react'
import * as actions from 'store/index/switchAction'
import styles from './styles.module.css'
import { connect } from 'react-redux'
import { paginate } from 'store/table/criteria/filter.js'
import { ReactComponent as UpSVG } from 'assets/icons/up.svg'
import { ReactComponent as NextSVG } from 'assets/icons/next.svg'

const Footer = (props) => {
	const disabled = { opacity: 0.3, cursor: 'default' }
	const setThinking = () => {
		const thinking = document.getElementById('thinking')
		thinking.style.opacity = 0
		thinking.style.display = 'block'
	}
	const handlePlus = () => {
		if (actions.getState(props, actions.FOOTER).itemsPerPage === 50) return
		setThinking()
		actions.setState(props, actions.FOOTER, {
			...actions.getState(props, actions.FOOTER),
			currentPage: 1,
			totalPages: Math.ceil(
				actions.getState(props, actions.FILTERED).length /
					(actions.getState(props, actions.FOOTER).itemsPerPage + 10)
			),
			itemsPerPage:
				actions.getState(props, actions.FOOTER).itemsPerPage + 10,
		})
	}
	const handleMinus = () => {
		if (actions.getState(props, actions.FOOTER).itemsPerPage === 10) return
		setThinking()
		actions.setState(props, actions.FOOTER, {
			...actions.getState(props, actions.FOOTER),
			currentPage: 1,
			totalPages: Math.ceil(
				actions.getState(props, actions.FILTERED).length /
					(actions.getState(props, actions.FOOTER).itemsPerPage - 10)
			),
			itemsPerPage:
				actions.getState(props, actions.FOOTER).itemsPerPage - 10,
		})
	}

	const handleRight = () => {
		if (
			actions.getState(props, actions.FOOTER).currentPage ===
			actions.getState(props, actions.FOOTER).totalPages
		)
			return
		setThinking()
		actions.setState(props, actions.FOOTER, {
			...actions.getState(props, actions.FOOTER),
			currentPage:
				actions.getState(props, actions.FOOTER).currentPage + 1,
		})
	}
	const handleLeft = () => {
		if (actions.getState(props, actions.FOOTER).currentPage === 1) return
		setThinking()
		actions.setState(props, actions.FOOTER, {
			...actions.getState(props, actions.FOOTER),
			currentPage:
				actions.getState(props, actions.FOOTER).currentPage - 1,
		})
	}
	useEffect(() => {
		const initVal = {
			currentPage: 1,
			totalPages: Math.ceil(
				actions.getState(props, actions.FILTERED).length /
					actions.getState(props, actions.FOOTER).itemsPerPage
			),
			totalItems: actions.getState(props, actions.FILTERED).length,
		}
		actions.setState(props, actions.FOOTER, initVal)
	}, [actions.getState(props, actions.FILTERED)])
	useEffect(() => {
		paginate(props)
	}, [actions.getState(props, actions.FOOTER)])
	return (
		<div className={styles.footer}>
			<div>
				Items por pagina:{' '}
				{actions.getState(props, actions.FOOTER).itemsPerPage}
				<div className={styles.amountControlContainer}>
					<div
						className={styles.button}
						onClick={handlePlus}
						style={
							actions.getState(props, actions.FOOTER)
								.itemsPerPage === 50
								? disabled
								: {}
						}
					>
						<UpSVG className={styles.svgCounter} />
					</div>
					<div
						className={styles.button}
						onClick={handleMinus}
						style={
							actions.getState(props, actions.FOOTER)
								.itemsPerPage === 10
								? disabled
								: {}
						}
					>
						<UpSVG
							className={styles.svgCounter + ' ' + styles.down}
						/>
					</div>
				</div>
			</div>
			<div className={styles.counter}>
				<div
					className={styles.button}
					onClick={handleLeft}
					style={
						actions.getState(props, actions.FOOTER).currentPage ===
						1
							? disabled
							: {}
					}
				>
					<NextSVG
						className={styles.svgFooter + ' ' + styles.previous}
					/>
				</div>
				<span
					style={
						actions.getState(props, actions.FOOTER).currentPage ===
						1
							? disabled
							: {}
					}
				>
					...
				</span>{' '}
				{actions.getState(props, actions.FOOTER).currentPage}{' '}
				<span
					style={
						actions.getState(props, actions.FOOTER).currentPage ===
						actions.getState(props, actions.FOOTER).totalPages
							? disabled
							: {}
					}
				>
					...
				</span>
				<div
					className={styles.button}
					onClick={handleRight}
					style={
						actions.getState(props, actions.FOOTER).currentPage ===
						actions.getState(props, actions.FOOTER).totalPages
							? disabled
							: {}
					}
				>
					<NextSVG className={styles.svgFooter} />
				</div>
			</div>
			<div>
				<div className={styles.pagesInfo}>
					{actions.getState(props, actions.FOOTER).totalPages} paginas{' '}
				</div>
				Items:{' '}
				<span style={{ fontFamily: 'Roboto-Regular' }}>
					{actions.getState(props, actions.FOOTER).totalItems}
				</span>
			</div>
		</div>
	)
}

const mapStateToProps = (state, props) =>
	actions.generalMapStateToProps(state, props.entity)
const mapDispatchToProps = actions.generalMapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
