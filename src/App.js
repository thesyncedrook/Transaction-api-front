
import React from 'react'
import axios from 'axios'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import WithdrawnTransactions from './components/WithdrawnTransactions';
import TransactionsBetweenDates from './components/TransactionsBetweenDates';
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/create/account" exact component={CreateAccount} />
          <Route path="/account/withdraw" exact component={Withdraw} />
          <Route path="/create/deposit" exact component={Deposit} />
          <Route
            path="/account/withdrawnTransaction"
            exact component={WithdrawnTransactions}
          />
          <Route
            path="/create/filterTransaction"
            exact component={TransactionsBetweenDates}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
 


/* componentDidMount(){ 
  axios.get('http://localhost:5000/locate').then(res=> {
    console.log(res.data)
     if(res.data===true){
       console.log("In Office")
       return axios.get('http://localhost:5000/run')
     }
     if(res.data===false){ 
       console.log('Not in office')
       return axios.post('http://localhost:5000/addSalt')
     }
  }).then((res)=> { 
    console.log(res.data)
    if(res.data==='Adding Salt'){ 
      return axios.get('http://localhost:5000/run')
    }
  }).then((res)=> { 
    if(res){
    console.log(res.data)
    }
  })
}
render(){ 
  return(
    <h1>
      hello
    </h1>
  )
}
} */
