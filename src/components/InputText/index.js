import React, { useEffect } from 'react'
import styles from './styles.module.css'

const InputText = (props) => {
	const spanId = 'input-span-' + props.name
	const inputId = 'input-text-' + props.name
	const styleContainer = {
		width: props.width,
	}
	const styleInput = {
		textAlign: props.number === 'true' ? 'right' : 'left',
	}

	useEffect(() => {
		if (props.value !== '') {
			const span = document.getElementById(spanId)
			span.classList.add(styles.spanTop)
		}
		document.getElementById(
			'input-text-' + props.name
		).value = props.value
	}, [])
	const toInputUppercase = (e) => {
		const c = e.target.value
		if (props.number) e.target.value = c.replace(/[^\d]/g, '')
		else e.target.value = ('' + c).toUpperCase()

		const criteria = {}
		criteria[props.field] = e.target.value.trim()
		props.run(criteria)
	}
	return (
		<div style={styleContainer} className={styles.borderContainer}>
			<div className={styles.container}>
				<span
					id={'input-span-' + props.name}
					onClick={(e) => {
						const span = document.getElementById(spanId)
						span.classList.add(styles.spanTop)
						document.getElementById(inputId).focus()
					}}
				>
					{props.name}
				</span>
				<input
					style={styleInput}
					id={'input-text-' + props.name}
					type="text"
					autoComplete="off"
					onFocus={(e) => {
						const span = document.getElementById(spanId)
						span.classList.add(styles.spanTop)
					}}
					onBlur={(e) => {
						if (e.target.value === '') {
							const span = document.getElementById(spanId)
							span.classList.remove(styles.spanTop)
						} else {
							e.target.value = e.target.value.trim()
							if (e.target.value === '') {
								const span = document.getElementById(spanId)
								span.classList.remove(styles.spanTop)
							}
						}
					}}
					onChange={toInputUppercase}
				></input>
			</div>
		</div>
	)
}

export default InputText
