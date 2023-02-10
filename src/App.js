import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading : true,
      isLoggedIn:false,
    }
  }

  componentDidMount(){
    const getUserInto = localStorage.getItem('isLoggedIn')
    let updateValue = this.state.isLoggedIn;
    if (getUserInto){
      updateValue = true;
    } else {
      updateValue = false;
    }
    this.setState({
      loading:false,
      isLoggedIn : updateValue
    })
  }

  render(){
    return (
      <div>
        {this.state.loading && <h3>Loading</h3>}
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Hello User</h3>
                        <button>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h3>Please login</h3>
                        <button>Login</button>
                    </div>
                )}
      </div>
    )
  }
}

export default App;