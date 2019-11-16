import React,{Component} from 'react'
import texture from './woodtext.jpg'
var st={
    position:"relative",
    left:"200px"
}
var center={
    position:"relative",
    left:"300px",
    top:"150px",
    height:"340px",
}
var back={
    backgroundImage:`url(${texture})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"680px",
    margin:"0px"
    
  }
class Page extends Component{
    render()
    {
        return(
            <React.Fragment>
            <div className="row" style={back}>
            <div className="col s12 m7">
            <div className="card" style={center}>
                <div className="card-content">
                <span class="card-title"><b><h1>TRAFFIC POLICE</h1></b></span>
                    <form action="">
                        <br/><br/>
                   Bike No: <input type="text col s3"/>
                   <br/>
                   <br/>
                   <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                   </button>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Page;