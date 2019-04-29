import React from 'react';
import Option from './Option.js';

import $ from 'jquery'; 

class Convertor extends React.Component {
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
        <div className="App">
          <div className="joda">
        <form>
          <input type="number" onChange={this.props.onNumberChange} />
          &nbsp;
          <select name="currency" value={this.state.fromCurrency} onChange={this.onCurrencyChange}>
            {this.state.currencies.map((cur) => (<option key={cur}>{cur}</option>))}
          </select>
		    </form>
        <p>
        {
         this.props.number && this.state.fromCurrency === 'dollar' && this.props.dollar.map(
           (dollar) => (<Option key={dollar.currency} currency={dollar.currency} amount={dollar.amount * this.props.number} />)
           )
        }
        {
          this.props.number && this.state.fromCurrency === 'toman' && this.props.toman.map(
            (toman) => (<Option key={toman.currency} currency={toman.currency} amount={toman.amount * this.props.number} />)
            )
         }
         {
          this.props.number && this.state.fromCurrency === 'rial' && this.props.rial.map(
            (rial) => (<Option key={rial.currency} currency={rial.currency} amount={rial.amount * this.props.number} />)
            )
         }
         {
          this.props.number && this.state.fromCurrency === 'euro' && this.props.euro.map(
            (euro) => (<Option key={euro.currency} currency={euro.currency} amount={euro.amount * this.props.number} />)
            )
         }
		</p>
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


$(function(){
            
  var flag=false;
  
  
  $(".main2").click(function(){
      
      if(!flag){
          $(this).addClass("selectedBtn");
          $(".nav").addClass("selectedNav");
          flag=true;
      }else{
              $(this).removeClass("selectedBtn");
          setTimeout(function(){
              $(".nav").removeClass("selectedNav");  
      
      
  },1000)
          flag=false;
          }
  
})
})




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

export default Convertor;
