import React from 'react';
// import CakeComponent from './components/cakeComponent';
// import IcecreamComponent from './components/iceCreamComponent';
// import CandyComponent from './components/candyComponent';
import PostComponent from './components/postComponent';
import NavbarComponent from './components/navbarComponent';
import FavouritePostComponent from './components/favouritePostComponent';
import style from './app.module.css'

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      {/* <CakeComponent/>
      <IcecreamComponent />
      <CandyComponent /> */}
      <div className = {style.contentContainer}>
        <PostComponent />
        <FavouritePostComponent />
      </div>
      
    </div>
  );
}

export default App;
