import React from 'react'
import styles from './styles.module.css'

const BlackScreen = (props) => {
	return (
		<div id="id-importer" className={styles.container}>
			<h1 className={styles.title}>Distribuidora Mendoza</h1>
			<br />
			<div className={styles.loader}></div>
			<br />
			<p className={styles.label}>{props.status}</p>
		</div>
	)
}

export default BlackScreen
