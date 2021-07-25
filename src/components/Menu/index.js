import React, { useState } from 'react'

import Item from './Item'
import styles from './styles.module.css'

const Menu = () => {
	const [sltClass, setSltClass] = useState('')

	const handleSlt = (name) => {
		setSltClass(() => name)
	}

	return (
		<div className={styles.menu}>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="sale"
				label="Ventas"
			>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="credit"
					label="Nota de Credito"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="debito"
					label="Nota de Debito"
				></Item>
			</Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="receipt"
				label="Recibos"
			>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="cheque"
					label="Cheques"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="bank"
					label="Bancos"
				></Item>
			</Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="product"
				label="Productos"
			>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="brand"
					label="Marcas"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="classification"
					label="Clasificacion"
				></Item>
			</Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="customer"
				label="Clientes"
			></Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="seller"
				label="Preventistas"
			>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="driver"
					label="Repartidores"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="supplier"
					label="Proveedores"
				></Item>
			</Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="info"
				label="Informes"
			>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="info1"
					label="Informe 1"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="info2"
					label="Informe 2"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="info3"
					label="Informe 3"
				></Item>
				<Item
					sltClass={sltClass}
					handleSlt={handleSlt}
					name="info4"
					label="Informe 4"
				>
					<Item
						sltClass={sltClass}
						handleSlt={handleSlt}
						name="infoA"
						label="Informe A"
					></Item>
				</Item>
			</Item>
			<Item
				sltClass={sltClass}
				handleSlt={handleSlt}
				name="config"
				label="Configuraciones"
			></Item>
		</div>
	)
}
export default Menu
