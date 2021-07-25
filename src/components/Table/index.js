import React, { useEffect } from 'react'
import Item from './Item'
import Footer from './Footer'
import styles from './styles.module.css'
import itemStyles from './Item/styles.module.css'

const Table = (props) => {
	const SMALL = 100
	const MEDIUM = 150
	const LARGE = 300

	const handleItemSelect = (selected) => {
		document
			.querySelectorAll(
				'#' + props.id + ' #id' + selected + ' .' + itemStyles.field
			)
			.forEach((e) => e.classList.toggle(itemStyles.selected))
	}

	const checkColumnSelected = () => {
		const fieldHeaders = document.querySelectorAll(
			'#' + props.id + '-header .' + itemStyles.field
		)
		fieldHeaders.forEach((e, index) => {
			if (e.style.color) {
				handleHeaderSelect(index)
			}
		})
	}

	useEffect(() => {
		checkColumnSelected()
		const thinking = document.getElementById('thinking')
		thinking.style.opacity = 0
		setTimeout(function () {
			thinking.style.display = 'none'
		}, 200)
	}, [props.items])

	let rowWidth = 0
	const arrSizes = props.header.map((field) => {
		if (field.size === 'small') {
			rowWidth += SMALL
			return 100
		} else if (field.size === 'medium') {
			rowWidth += MEDIUM
			return 150
		} else {
			rowWidth += LARGE
			return 300
		}
	})

	let arrLocked = arrSizes.map(() => false)
	let arrLefts = arrSizes.map(() => 0)

	const rowStyle = { minWidth: rowWidth + 'px', maxWidth: '100%' }

	const handleHeaderSelect = (mainIndex) => {
		arrLocked[mainIndex] = !arrLocked[mainIndex]
		let stickyLeft = 0
		arrLefts = arrLocked.map((isLocked, index) => {
			if (isLocked) {
				const ss = stickyLeft + 'px'
				stickyLeft += arrSizes[index]
				return ss
			}
			return ''
		})

		arrLocked.map((isLocked, index) => {
			if (!(index === mainIndex || (isLocked && mainIndex < index)))
				return null

			const arrFields = document.querySelectorAll(
				'#' +
					props.id +
					' .' +
					itemStyles.field +
					':nth-child(' +
					(index + 1) +
					')'
			)

			return arrFields.forEach((f, inde) => {
				if (!isLocked) {
					f.style = null
				} else {
					if (inde === 0) {
						f.style.color = 'var(--white-100)'
						f.style.fontFamily = 'Roboto-Regular'
						f.style.background = 'var(--black-100)'
					}
					if (inde % 2 === 0) {
						f.style.background = 'var(--black-300)'
						if (inde === 0) {
							f.style.background = 'var(--black-200)'
						}
					} else f.style.background = 'var(--black-400)'
					f.style.opacity = 1
					f.style.position = 'sticky'
					f.style.left = arrLefts[index]
				}
			})
		})
	}

	const headers = (
		<>
			{props.header.map((header, index) => (
				<div
					key={index}
					className={
						itemStyles.field +
						' col-' +
						header.size +
						(header.align == null ? '' : ' ' + header.align)
					}
					onClick={() => handleHeaderSelect(index)}
				>
					{header.name}
				</div>
			))}
			<div className={itemStyles.field + ' ' + itemStyles.control}>.</div>
		</>
	)

	const items = (
		<div>
			{props.items.map((row) => {
				return (
					<Item
						key={row.id}
						id={row.id}
						rowStyle={rowStyle}
						row={row}
						header={props.header}
						className={itemStyles.field}
						handleSelect={handleItemSelect}
					></Item>
				)
			})}
		</div>
	)
	return (
		<div id={props.id} className={styles.container}>
			{props.children}
			<div className={styles.table}>
				<div
					id={props.id + '-header'}
					className={styles.header}
					style={rowStyle}
				>
					{headers}
				</div>
				{items}
			</div>
			<Footer entity={props.entity} />
		</div>
	)
}

export default Table
