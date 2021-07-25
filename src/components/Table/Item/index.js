import React from 'react'
import { ReactComponent as GearSVG } from 'assets/icons/gear.svg'
import styles from './styles.module.css'

const Item = (props) => {
	return (
		<div className={styles.row} id={'id' + props.id} style={props.rowStyle}>
			{props.header.map((field, index) => (
				<div
					key={index}
					className={
						styles.field +
						' col-' +
						props.header[index].size +
						' ' +
						props.header[index].align
					}
					onClick={() => props.handleSelect(props.id)}
				>
					{props.row[field.field] === ''
						? '.....'
						: props.row[field.field]}
				</div>
			))}
			<div className={styles.field + ' ' + styles.control}>
				{' '}
				+
				<GearSVG className={styles.svgGear} />
			</div>
		</div>
	)
}

export default Item
