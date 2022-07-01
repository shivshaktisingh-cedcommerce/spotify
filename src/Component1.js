import React from 'react'
import Component2 from './Component2';
import Component3 from './Component3';
import Componentnew from './Componentnew';
import Component5 from './Component5';
import Component6 from './Component6';

 class Component1 extends React.Component {
  render() {
    return (
      <div className="container1">
          <div className="row">
             
              <div id="hd1"><i class="fa fa-spotify logospot"><span className="logocontent">Spotify</span></i></div>            
              <div className="hd2">Premium </div>
              <div className="col hd3">Support</div>
              <div className="col hd4">Download</div>
              <div className="col hd5">|</div>
              <div className="col hd6">Sign up</div>
              <div className="col hd7">Log in</div>
            

          </div>
          <div className="afterheader">
              <p className="afterheader1">Get Premium free for 1 month</p>
         
              <p className="afterheader2">Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
          
              <input type="button" class="btn" id="btn1" value="GET STARTED"/><input type="button" class="btn" id="btn2" value="SEE OTHER PLANS"/>
         
              <p className="afterheader3"><a href="#">Terms and conditins apply. </a>1 Month free not avilable for users who have already tried premium.</p>
          </div>
          <div className="afterafterheader">
              <p className="afterafterheader1">Introducing Premium Mini</p>
         
              <p className="afterafterheader2">₹7 for 1 day</p>
              <p className="afterafterheader3">₹25 for 1 week</p>
          
              <input type="button"  id="btn3" value="GET MINI"/>
         
              <p className="afterafterheader4"><a href="#">Terms and conditins apply. </a></p>
          </div>
          <Component2/>
          <Component3/>
          <Componentnew/>
          <Component5/>
          <Component6/>
      </div>
      
    )
  }
}
export default Component1;
