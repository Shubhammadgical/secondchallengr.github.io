import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import suvs from "./animals/icon-suvs.svg";
import sedans from "./animals/icon-sedans.svg";
import luxury from "./animals/icon-luxury.svg";
import './singlepage.css'
import "@fontsource/karla"
class Singlepage extends Component{
    state={
        btn1:false,
        btn2:false,
        btn3:false
    }
    handlebtn=()=>{
        let s1={...this.state};
        this.setState(s1);
    }
    
    render(){
        let {}=this.state;
        return(
            <div style={{height:"100vh",weidth:"100vw",padding:"8%",fontSize:"15px"}}>
                <div className="row p-4" style={{display:"flex"}}>
                    <div className="div11 col-12">
                        <h4 className="h1">Join our community</h4>
                        <h5>30-day, hassle-free money back guarantee</h5>
                        Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                    </div>
                    <div className="div12  col-lg-6 col-md-6 col-sm-12 ">
                        <h4>Monthly Subscription </h4>
                        <div className="row" style={{height:50}}>
                            <table>
                                <tr>
                                    <td style={{fontSize:40,color:"white",width:20}}>&nbsp;$29</td>
                                    <td>&nbsp;&nbsp;per month</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div><br/>
                        <span className="full">Full access for less than $1 a day</span><br/><br/>
                        <butto className="btn1 btn form-control">Sign Up</butto>
                    </div>
                    <div className="div13 col-lg-6 col-md-6 col-sm-12 ">
                        <h4>Why Us</h4>
                        Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week
                    </div>
                </div>
            </div>
        )
    }
}
export default Singlepage;