import React,{Component} from 'react';
import cookie from 'react-cookies';
import texture from './woodtext.jpg';
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
    state={
        bikeno:'',
    }
    changeHandler=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=e=>{
        e.preventDefault();
        console.log(this.state.bikeno);
        cookie.save('bikeno',this.state.bikeno,{path:'/'});
        this.props.history.push('/viewProfile');
    }
    render()
    {
        return(
            <React.Fragment>
            <div className="row" style={back}>
            <div className="col s12 m7">
            <div className="card" style={center}>
                <div className="card-content">
                <span class="card-title"><b><h1>TRAFFIC POLICE</h1></b></span>
                    <form action="" onSubmit={this.submitHandler}>
                        <br/><br/>
                   Bike No: <input type="text col s3" onChange={this.changeHandler} name="bikeno"/>
                   <br/>
                   <br/>
                   <button className="btn waves-effect waves-light" type="submit" name="subbutton">Submit
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