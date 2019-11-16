import React,{Component} from 'react';
import texture from './woodtext.jpg';
var back={
    backgroundImage:`url(${texture})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"680px",
    margin:"0px"
    
  }
var st={
    position:"relative",
    left:"200px"
}
var cent={
    position:"relative",
    left:"230px"
}
var center={
    position:"relative",
    left:"300px",
    top:"70px",
    height:"350px"
}
class Page extends Component{
    render()
    {
        return(
            <React.Fragment>
                <div className="row" style={back}>
                <h2 className="center-align">TRAFFIC POLICE</h2>
            <div className="row">
            <div className="col s12 m7">
            <div className="card valign-wrapper center-align" style={center}>
                <div className="card-content" style={cent}>
                <span class="card-title"><b><h1>Login</h1></b></span>
                    <div className="row">
                        <br/>
                        <br/>
                   Username : <input type="text col s3"/>
                   <br/>
                   <br/>
                   Password : <input type="password col s3"/>
                        </div>
                    <div className="btn-floating btn-large waves-effect waves-light red">Login</div>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                  </div>
                  </div>
                  </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Page;