import React from 'react';
import Main from './component/mainContent';
import Nav from './component/nav';
import Footer from './component/footer';

class App extends React.Component {
  render(){
    return(
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}



export default App;
