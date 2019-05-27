import React from 'react';
import './App.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Robert john',
      textVal: ''
    };
  }
  componentDidMount() {
    this.textVal = document.getElementById("username");
    var x = this.textVal.textContent.replace('...', this.state.inputValue)
    this.textVal.innerHTML = x ;
    
    var numbVal = document.getElementById("numb");
    function doAdd(i, j) {
        setTimeout(function() { numbVal.innerHTML += i + " "; }, j*5000);
    }
    var j=1;
    for(var i= 1; i < 50; i=i*2) {
      doAdd(i, j++)
    }
  }
  handleClick = event => {
    event.preventDefault();
    event.target.innerHTML += " "+ event.target.getAttribute("class")
  }
render() {
  return (
    <div className="App">
        <ul>
            <li><span>My name is ...</span></li>
            <li>1. <span id="username">My name is ...</span></li>
            <br/>
            <li>2. Answear in App.scss</li>
            <br/>
            <li>3. <span id="numb"></span></li>
            <br/>
            <li><div style={{width:'200px',border:'1px solid #ddd'}}>yycbnceicuiencieddecbedcedcnieundcieudnciendce</div></li>
            <li>4. <div style={{width:'200px',border:'1px solid #ddd', wordBreak: 'break-all'}}>yycbnceicuiencieddecbedcedcnieundcieudnciendce</div></li>
            <br/>
            <li>5. 
                <div id="section-1" className="odd" onClick={this.handleClick}>Text 1</div>
                <div id="section-2" className="even" onClick={this.handleClick}>Text 2</div>
                <div id="section-3" className="odd" onClick={this.handleClick}>Text 3</div>
                <div id="section-4" className="even" onClick={this.handleClick}>Text 4</div>
                <div id="section-5" className="odd" onClick={this.handleClick}>Text 5</div>
            </li>
        </ul>
    </div>
  );
}
}
export default List;
