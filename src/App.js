import React, { Component } from 'react';
import './App.css'


let defaultStyle = {
    color: '#000',
};



class Playlist extends Component{
    render(){
        return (
            <div style={{...defaultStyle, display:'inline-block' , width: '40%'}} className='Playlist'>
                <img src="" alt=""/>
                <h3>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                    <li>Song 4</li>
                    <li>Song 5</li>
                </ul>
            </div>
        );
    }
}

class Aggregate extends Component{
    render(){
        return(
            <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} >
                <h2>Number Text</h2>
            </div>
        )
    }
}


class Filter extends Component{
    render(){
        return(
          <div style={defaultStyle}>
              <img src="" alt=""/>
              <input type="text"/>Filter
          </div>  
        );
    }
}
class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
          <Aggregate/>
          <Aggregate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>

      </div>
    );
  }
}




export default App;
