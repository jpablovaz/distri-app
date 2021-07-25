import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as UpSVG } from 'assets/icons/up.svg'

import styles from './styles.module.css'

const Item = (props) => {
	useEffect(() => {
		setArrow(props.children === undefined ? 'display-none' : '')
	}, [props])
	let first = true
	const [style, setStyle] = useState()
	const [icon, setIcon] = useState(styles.svgDown)
	const [arrow, setArrow] = useState('opacity-0')
	const subItems = props.children !== undefined ? props.children : ''
	const handleArrow = (e) => {
		e.preventDefault()
		first = false
		if (props.children === undefined) {
			return
		}

		if (!style) {
			setIcon(styles.svgUp)
			setStyle(styles.visible)
		} else {
			setIcon(styles.svgDown)
			setStyle(null)
		}
	}

	const handleClick = () => {
		if (first) props.handleSlt(props.name)
		else first = true
	}
	const itemClasses =
		styles.item +
		' ' +
		(props.name === props.sltClass ? styles.selected : '')

	return (
		<>
			<Link to={'/' + props.name}>
				<div className={itemClasses} onClick={handleClick}>
					<div
						className={styles.arrowContainer + ' ' + arrow}
						onClick={(ev) => handleArrow(ev)}
					>
						<UpSVG className={icon} />
					</div>
					{props.label}
				</div>
			</Link>
			<div className={styles.subItems + ' ' + style}>{subItems}</div>
		</>
	)
}

export default Item
