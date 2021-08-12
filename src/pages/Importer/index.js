import React, { useState, useEffect } from 'react'
import BlackScreen from './BlackScreen'
import axios from 'axios'

const Importer = () => {
	const [status, setStatus] = useState('Iniciando...')
	const [isActive, setIsActive] = useState(true)

	function toggle() {
		setIsActive(!isActive)
	}

	function reset() {
		setStatus(0)
		setIsActive(false)
	}

	useEffect(() => {
		let interval = null
		if (isActive) {
			interval = setInterval(() => {
				axios
					.get('http://localhost:8090/bank/test')
					.then((response) => {
						var d = new Date()
						var n = d.getTime()
						console.log(n)
						setStatus(response.data)
						if (response.data === 'Finished') {
							toggle()
							document.getElementById(
								'id-importer'
							).style.display = 'none'
							setTimeout(() => {
								axios
									.get(
										'http://localhost:8090/seller-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})

								axios
									.get('http://localhost:8090/bank-query/all')
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})

								axios
									.get(
										'http://localhost:8090/brand-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})

								axios
									.get(
										'http://localhost:8090/classification-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
								axios
									.get(
										'http://localhost:8090/product-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})

								axios
									.get(
										'http://localhost:8090/customer-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})

								axios
									.get(
										'http://localhost:8090/seller-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
								axios
									.get(
										'http://localhost:8090/customer-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
								axios
									.get(
										'http://localhost:8090/driver-query/all'
									)
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
								axios
									.get('http://localhost:8090/user-query/all')
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
								axios
									.get('http://localhost:8090/list/all')
									.then((response) => {
										console.log(response.data)
									})
									.catch((error) => {
										console.log(error)
									})
							}, 40000)
						}
						console.log('call...')
					})
					.catch((error) => {
						console.log(error)
					})
			}, 30000)
		} else if (!isActive && status !== 'Iniciando...') {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isActive, status])
	/* 
	var intervalId = window.setInterval(
		function (setStatus) {
			axios
				.get('http://localhost:8090/bank/tests')
				.then((response) => {
					var d = new Date()
					var n = d.getTime()
					setStatus(response.data)
					setStatus(n)
				})
				.catch((error) => {
					console.log(error)
					var d = new Date()
					var n = d.getTime()
					this.setStatus(n)
				})
			/// call your function here
		},
		5000,
		setStatus
	)
*/
	return <BlackScreen status={status} />
}

export default Importer
