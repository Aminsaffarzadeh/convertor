import React from 'react';
import Dollar from './Dollar';
import Euro from './Euro';
import Toman from './Toman';
import Rial from './Rial';

class Setting extends React.Component {
	state = {
		fromCurrency: 'dollar',
      currencies: ['dollar','toman','rial','euro']
   };
   
   //changes the currency we enter / (on dropdown select)
   onCurrencyChange = (e) => {
      const fromCurrency = e.target.value;
      this.setState(() => ({fromCurrency}));
    };

	render() {
		return (
      <div>
        <div className="setting">
          <p className="set2">
          From: <select className="Form" name="currency" value={this.state.fromCurrency} onChange={this.onCurrencyChange}>
          {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
          </select>
          </p>
          {
             (this.state.fromCurrency === 'dollar' && <Dollar onToAmount_d={this.props.onToAmount_d} onToCurrency={this.props.onToCurrency}/>) || 
             (this.state.fromCurrency === 'euro' && <Euro onToAmount_e={this.props.onToAmount_e} onToCurrency={this.props.onToCurrency}/>) ||
             (this.state.fromCurrency === 'toman' && <Toman onToAmount_t={this.props.onToAmount_t} onToCurrency={this.props.onToCurrency}/>) ||
             (this.state.fromCurrency === 'rial' && <Rial onToAmount_r={this.props.onToAmount_r} onToCurrency={this.props.onToCurrency}/>)
          }


          </div>




                      <div className="custom">

        <div className="main2">
                <div className="cir"></div>
                <div className="cir"></div>
                <div className="cir"></div>
        </div>
        <nav>
        <div className="box">
            <form>
                <input type="text" name="" placeholder="Type..." className="inp"/>
                <input type="submit" name="" value="Search" className="inp"/>
            </form>
        </div>
        <ul className="menu">
            <li><a href="a">amin</a></li>
            <li><a href="a">About</a></li>
            <div>
            <li><a href="a">Services</a></li>
            <li><a href="a">Profile</a></li>
            <li><a href="a">Cars</a></li>
            </div>
        </ul>
        </nav>
        </div>




            <nav className="nav">
              
              <ul>
                  <button type="button">Home</button>
                  <button type="button">About</button>
                  <button type="button">Cars</button>
                  <button type="button">Profile</button>
              </ul>
              
          </nav>










                    <div className="timer"></div>
        <ul className="ul">
            <li className="li backtest" ></li>
            <li className="li backtest2"></li>
            <li className="li backtest3"></li>
            <li className="li backtest4"></li>
        </ul>



            

		  </div>
		);
    }
    




    componentDidMount(){



      //jquery
      
      

      
      
      
      
          //js
      
      
          var ulEl=document.querySelector(".ul"),
              liEls=ulEl.querySelectorAll(".li"),
              liElsCount=liEls.length,
              counter=0;
              liEls[0].style.opacity=1;
               var timerEl=document.querySelector(".timer");
          timerEl.classList.add("timerIn");
          
              
      
              
              
              setInterval(function(){
                  for(var i=0;i<liElsCount;i++){
                  
                  liEls[i].style.opacity=0;
                  
              } 
                   timerEl.classList.remove("timerIn");
                counter++;   
                  if(counter==liElsCount){
                  counter=0;
              }   
               setTimeout(function(){
                   
                   
                       liEls[counter].style.opacity=1;   
                    timerEl.classList.add("timerIn");
                   timerEl.style.animationDuration="3s";
               },100)
                  
                  
              },4000)
              
      
              
      
          
      
      
        }








}

export default Setting;
