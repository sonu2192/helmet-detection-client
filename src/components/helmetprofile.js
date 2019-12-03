import React,{Component} from 'react';
import texture from './woodtext.jpg';
import axios from 'axios';
import cookie from 'react-cookies';
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
  state={
    bikeno:cookie.load('bikeno'),
    bikes:{},
    image:null,
    filename:'',
    message:''
  }
  componentDidMount()
  {
    axios.post("http://localhost:5000/traffic/getInfo",this.state)
    .then(info=>{
      console.log(info.data);
      this.setState({
        bikes:info.data
      },function(){
        document.getElementById('name').value=this.state.bikes.name;
        document.getElementById('name').readOnly=true;
        document.getElementById('bike_no').value=this.state.bikes.bikeno;
        document.getElementById('bike_no').readOnly=true;
        document.getElementById('email').value=this.state.bikes.email;
        document.getElementById('email').readOnly=true;
      })
    })
  }
  changeHandler=e=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  onChangeHandle(e)
  {
    this.setState({
     image: e.target.files[0],
     filename:Date.now()+'-'+e.target.files[0].name
    },function(){
      console.log(this.state.image);
    });
  }
  submitHandler=e=>{
    e.preventDefault();
    const data=new FormData()
    data.append('file',this.state.image);
    axios.post('http://localhost:5000/upload',data,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res1=>{
      axios.post('http://localhost:5000/update',this.state)
      .then(res2=>{
        axios.post('http://localhost:5000/mail',this.state)
        .then(res3=>{
          alert(res3.data);
        })
        .catch(err=>{
          alert("unable to send the mail");
        })
      })
      .catch(err=>{
        alert("unable to upload file");
      })
    })
  }
    render()
    {
        return(
            <React.Fragment>
              <div className="row" style={back}>
                <div className="card" style={ca}>
            <div className="row">
            <div className="photo" style={photo}>
         </div>
    <form className="col s12" onSubmit={this.submitHandler}>
      <div className="row">
        <div className="col s2 indigo-text">Name</div>
        <div className="input-field col s4">
          <input id="name" type="text"/>
        </div>
      </div>
      <div className="row">
        <div className="col s2 indigo-text">Bike no</div>
        <div className="input-field col s4">
          <input  id="bike_no" type="text"/>
        </div>
      </div>
      <div className="row">
        <div className="col s2 indigo-text">Email</div>
        <div className="input-field col s4">
          <input id="email" type="email" />
        </div>
      </div>
      <div className="left-align">message</div>
      <textarea name="message" id="message" cols="30" rows="50" onChange={this.changeHandler}></textarea>
      <div className="file-field input-field">
      <div className="btn">
        <span>Upload File</span>
        <input type="file" onChange={(e)=>this.onChangeHandle(e)}/>
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