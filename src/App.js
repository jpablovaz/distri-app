import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/*================================================== 
                        SOCKET 
  ==================================================*/
//import SockJsClient from 'react-stomp'

/*================================================== 
                          STORE 
  ==================================================*/
import { connect } from 'react-redux'
import * as actions from 'store/table/entity/actions'

/*================================================== 
                          MENU 
  ==================================================*/
import UserInfo from 'components/UserInfo'
import Menu from 'components/Menu'

/*================================================== 
                          PAGES 
  ==================================================*/
import Bank from './pages/Importer'
import Importer from './pages/Importer'
import Brand from './pages/Brand'
import Cheque from './pages/Cheque'
import Classification from './pages/Classification'
import Customer from './pages/Customer'
import Driver from './pages/Driver'
import Info from './pages/Info'
import Receipt from './pages/Receipt'
import Sale from './pages/Sale'
import seller from './pages/seller'
import product from './pages/product'
import Supplier from './pages/Supplier'

function App(props) {
	props.onFetchBanks()
	props.onFetchBrands()
	props.onFetchClassifications()
	props.onFetchCustomers()
	props.onFetchDrivers()
	props.onFetchProducts()
	props.onFetchSellers()
	props.onFetchSuppliers()
	props.onFetchUsers()
	props.onFetchLists()

	return (
		<Router>
			<div className="App">
				<div id="thinking"></div>
				<Importer />
				<aside>
					<UserInfo />
					<Menu />
				</aside>

				<main>
					<Route path="/sale" exact component={Sale} />
					<Route path="/receipt" exact component={Receipt} />
					<Route path="/product" exact component={Product} />
					<Route path="/brand" exact component={Brand} />
					<Route
						path="/classification"
						exact
						component={Classification}
					/>
					<Route path="/customer" exact component={Customer} />
					<Route path="/seller" exact component={Seller} />
					<Route path="/driver" exact component={Driver} />
					<Route path="/supplier" exact component={Supplier} />
					<Route path="/cheque" exact component={Cheque} />
					<Route path="/bank" exact component={Bank} />
					<Route path="/info" exact component={Info} />
				</main>
			</div>
		</Router>
	)
}

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
	onFetchBanks: actions.fetchBanks,
	onFetchBrands: actions.fetchBrands,
	onFetchClassifications: actions.fetchClassifications,
	onFetchCustomers: actions.fetchCustomers,
	onFetchDrivers: actions.fetchDrivers,
	onFetchProducts: actions.fetchProducts,
	onFetchSellers: actions.fetchSellers,
	onFetchSuppliers: actions.fetchSuppliers,
	onFetchUsers: actions.fetchUsers,
	onFetchLists: actions.fetchLists,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
