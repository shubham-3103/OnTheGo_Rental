import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from 'web3'
import { Book} from "./pages/Book";
import Rate from "./pages/Rate";
import Support from "./pages/Support";
import HomeVehicle from "./pages/HomeVehicle";
import Upload from "./pages/Upload";


function App() {

	// const [isConnected,setIsConnected] = useState(false);
	// const [ethBalance,setEthBalance] = useState("");
	// const detectCurrentProvider = () =>{
	// 	let provider;
	// 	if(window.ethereum){
	// 		provider = window.ethereum;;
	// 	}else if(window.web3){
	// 		provider = window.web3.currentProvider;
	// 	}else{
	// 		console.log("Non ethereum browser detected. ou should install Metamask ")
	// 	}
	// 	return provider;
	// }
	// const onConnect = async() =>{
	// 	try{
	// 		const currentProvider = detectCurrentProvider();
	// 		if(currentProvider){
	// 			await currentProvider.request({method:'eth_requestAccounts'});
	// 			const web3 = new Web3(currentProvider);
	// 			const userAccount = await web3.eth.getAccounts();
	// 			const account = userAccount[0];
	// 			let ethBalance = await web3.eth.getBalance(account);
	// 			setEthBalance(ethBalance);
	// 			setIsConnected(true);
	// 		}
	// 	}catch(error){
	// 		console.log(error); 
	// 	}
	// }

	// const onDisconnect = () =>{
	// 	setIsConnected(false);
	// }

return (
	<div>
		{/* <div className="app">
			<div className="app-wrapper">
				{!isConnected && (
					<div>
						<button className="app-button_login" onClick={onConnect}>
							Login
						</button>
					</div>
				)}
			</div>
			{isConnected && (
				<div className="app-wrapper">
					<div className="app-details">
						<h2>you are connected to metamask</h2>
						<div className="app-balance">
							<span>Balance: </span>
							{ethBalance}
						</div>
					</div>
					<div>
						<button className="app-buttons_logout" onClick={onDisconnect}>
							Disconnect
						</button>
					</div>
				</div>
			)}
		</div> */}

	<Router>
		<Sidebar />
		<Routes>
			<Route path='/' element={<Book/>} />
			<Route path='/book' element={<Book/>} />
			<Route path='/rate' element={<Rate/>} />
			<Route path='/support' element={<Support/>} />
			<Route path='/homepage' element={<HomeVehicle />} />
			<Route path='/book' element={<Book />} />
			<Route path='/upload' element={<Upload />} />

		</Routes>
	</Router>
	</div>
);
}

export default App;
