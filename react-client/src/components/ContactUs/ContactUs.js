import React ,{ Component} from 'react'
import $ from 'jquery';


class ContactUs extends React.Component {


  state = {
    name : null,
    email : null,
    feedback : null
  };

handleChange = (event)=>{
    this.setState({
      [event.target.id]:event.target.value

  })
}

handleSubmit = (event)=>{

   var obj = {
    name: this.state.name,
    email: this.state.email,
    feedback: this.state.feedback
  }

// post requst using ajax 
$.ajax({
  type: "POST",
  url: '/contactus',
  data: {
      obj
  },
  success: function (data) {
      console.log("ajax data", data)
  },
  error: (err) => {

        console.log('err', err);
      }
  
});

event.preventDefault() 

}; 

   render(){
       return(
          <div className='container' >
           <form onSubmit={this.handleSubmit}>
           <div className="createEvent">
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User Name:</label>
                  <div className="col-sm-10">
                    <input id='name' className="form-control" placeholder="user name" onChange = {this.handleChange} />

                  </div>
                </div>
              </div>


              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User Email: </label>
                  <div className="col-sm-10">
                    <input id='email' className="form-control" placeholder="enter your email" onChange = {this.handleChange} />
                  </div>
                </div>
              </div>

              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">FeedBack: </label>
                  <div className="col-sm-10">
                    <input style={{height:100}} id='feedback' className="form-control" placeholder="FeedBack" onChange = {this.handleChange} />
                  </div>
                </div>
              </div>


              <div className="row">
                <button type="submit" value="create" className="btn btn-primary btn-lg btn-block" >Submit</button>
              </div>
            </div>
            <br />
          </form >


        </div>               
        
       )
         

   }
}

export default ContactUs
