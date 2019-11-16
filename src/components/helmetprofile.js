import React,{Component} from 'react';
import texture from './woodtext.jpg'
var ca={
    width:"900px",
    padding:"50px",
    height:"600px",
    position:"relative",
    left:"250px",
    top:"50px"
}
var photo={
    border:"1px solid black",
    height:"128px",
    width:"128px",
    position:"absolute",
    left:"600px",
    top:"100px"
}
var back={
  backgroundImage:`url(${texture})`,
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  height:"680px",
  margin:"0px"
  
}
class Profile extends Component{
    render()
    {
        return(
            <React.Fragment>
              <div className="row" style={back}>
                <div className="card" style={ca}>
            <div className="row">
            <div className="photo" style={photo}>
         </div>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="name" type="text" className="validate"/>
          <label for="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input  id="bike_no" type="text" className="validate"/>
          <label for="bike_no">Bike Number</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div className="left-align">message</div>
      <textarea name="message" id="message" cols="30" rows="50"></textarea>
      <div className="file-field input-field">
      <div className="btn">
        <span>Upload File</span>
        <input type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
  </button>
    </form>
  </div>
  </div>
  </div>
  </React.Fragment>
        )
    }
}
export default Profile;