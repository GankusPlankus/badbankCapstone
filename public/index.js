function Spa() {

// firebase key
const firebaseConfig = {
  apiKey: "AIzaSyDNop0bugmuGUswK-P2GevD43xGfGdasFw",
  authDomain: "badbank-153fa.firebaseapp.com",
  databaseURL: "https://badbank-153fa-default-rtdb.firebaseio.com",
  projectId: "badbank-153fa",
  storageBucket: "badbank-153fa.appspot.com",
  messagingSenderId: "11822904031",
  appId: "1:11822904031:web:60eb4563c1f1e72c5d2f6a",
  measurementId: "G-2YKY7B0PZP"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// handle on firebase db
const db = firebase.database();

// functions for changing user data
const setAll = (name, email, password, balance) => {
  setUser({...user, name: name, email: email, password: password, balance: balance})
  console.log('setAll was called');
}

  const initUser = {
    name: 'Christian', 
    email: 'cransmeier2@gmail.com', 
    password: 'secret', 
    balance: 100,
    setAll: setAll
  }
  const [user, setUser] = React.useState(initUser);

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={user}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
