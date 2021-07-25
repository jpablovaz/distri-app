import React from 'react'
import styles from './styles.module.css'

const UserInfo = (props) =>{

	return (
		<>
			<div className={styles.title}>Distribuidora Mendoza</div>
			<div className={styles.user}>Cristian</div>
			<div className={styles.logout}>
				<span>Cambiar de Usuario</span>
			</div>
		</>
	)
}
export default UserInfo;
