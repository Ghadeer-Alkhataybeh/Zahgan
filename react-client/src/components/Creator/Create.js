import React from 'react'
import $ from 'jquery';
import EventClassNew from '../EventClassNew'
import SimpleMap from '../map';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '',
      event: '',
      cost:'',
      description: '',
      photo: '',
      sets: '',
      date: '',
      location: '',
      items: '',
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.allseats = this.allseats.bind(this);
  }


  componentDidMount() {

    $.ajax({
      url: '/create',
      success: (data) => {
        console.log(data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleSubmit(event) {
    var obj = {
      creatorName: this.state.host,
      eventName: this.state.event,
      cost:this.state.cost,
      des: this.state.description,
      url: this.state.photo,
      availableSeats: this.state.sets,
      date: this.state.date,
      eventLocation: this.state.location,
      attending: []
    }

    console.log("myobj",obj)
    $.ajax({
      type: "POST",
      url: '/create',
      data: {
        obj
      },
      success: function (data) {
    console.log("ajax data",data)
      }
    });




    alert(obj.eventName + ' saved !');

    $.ajax({
      url: '/create',
      success: (data) => {
        console.log("my data",data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    event.preventDefault();
  }
  allseats(props) {
    var lastindex = props.state.items.length - 1
    var z = props.state.items[lastindex]
    var zz = 0
    for (var key in z) {
      if (key === 'availableSeats') {

        zz = z[key]
      }
    }
    return zz
  }



  viewlest(props) {
    var x = ""

    var c = function (i) {
    
      var xx = i.availableSeats - i.attending.length

      x = x + `${i.eventName} : ${xx}/${i.availableSeats}   `
    }
    for (var i = 0; i < props.state.items.length; i++) {
      c(props.state.items[i])
    }

    return x
  }

  allSeats(props){
    var x = 0

    var c = function (i) {
    

      x = x + i.availableSeats
    }
    for (var i = 0; i < props.state.items.length; i++) {
      c(props.state.items[i])
    }

    return x
  }

  reservedSeats(props){
    var x = 0

    var c = function (i) {
    

      x = x + i.attending.length
    }
    for (var i = 0; i < props.state.items.length; i++) {
      c(props.state.items[i])
    }

    return x
  }
  appearCreate(){
    $(document).ready(function(){
      $("#createClick").click(function(){
          $(".createEvent").toggle();
      });
  });
  }

  modal(){
   $('#exampleModal').on('shown.bs.modal', function () {
  $('#location-input').trigger('focus')
})
}
  

  render() {
    return (
     <div>
       <div class="container-fluid page-cont">
       <h6 className="list-group-item active main-color-bg">
             <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
           </h6>
		<div class="row dash-row">
			
			<div class="col-4 data-box">
				<div>
					<h3><span>{this.state.items.length}</span> Number of your events</h3>
				</div>
			</div>
			
			<div class="col-4 data-box">
				<div>
					<h3><span>{this.allSeats(this)}</span> Remaning seats for all events</h3>
				</div>
			</div>
			
			<div class="col-4 data-box">
				<div>
					<h3><span>{this.reservedSeats(this)}</span> Reserved seats for all events </h3>
				</div>
			</div>
			
		</div>
	</div>
<div className="container-fluid">

      <div className="row ">
   
      <div className="col-md-6">
         
         <div className="list-group">
           <h6 className="list-group-item active main-color-bg">
             <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
           </h6>
           <h6 className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Number of your events : <h6 class="badge"> {this.state.items.length} </h6></h6>
           <h6 className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>Remaning seats for each event <h6 class="badge"> {this.viewlest(this)} </h6></h6>
         </div>
         </div>

     </div>
     
        <div className="col-md-12">
       
         
          <h4 className="col-sm-3 border p-3 mb-2 bg-primary text-white" id="createClick" onClick={this.appearCreate}> Create a new event </h4>
            <div className=" row ">
             
            </div>
           
            <form onSubmit={this.handleSubmit}>
            <div className="createEvent">
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">User Name:</label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="user name" value={this.state.host}
                      onChange={e => this.setState({ host: e.target.value })} />
                  </div>
                </div>
              </div>


              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event Name: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="event name" value={this.state.event}
                      onChange={e => this.setState({ event: e.target.value })} />
                  </div>
                </div>
              </div>

<div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event Cost: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="cost" value={this.state.cost}
                      onChange={e => this.setState({ cost: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Photo: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="insert a URL" value={this.state.photo}
                      onChange={e => this.setState({ photo: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of seats: </label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="available seats number" value={this.state.sets}
                      type="number" onChange={e => this.setState({ sets: e.target.value })} />
                  </div>
                </div>
              </div>



              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Date and time:</label>
                  <div className="col-sm-10">
                    <input className="form-control" placeholder="mm/dd/yy" value={this.state.date}
                      type="datetime-local" onChange={e => this.setState({ date: e.target.value })} />
                  </div>
                </div>
              </div>

 
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Event location:</label>
                  <div class="col-sm-8">
                    <input id="location-input" className="form-control" placeholder="city, street" value={this.state.location}
                      onChange={e => this.setState({ location: e.target.value })} onClick={this.modal} />
                  </div>
                  <div class="col-sm-2"><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Map</button></div>
                </div>
              </div>

              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Event description:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" placeholder="event description" value={this.state.description}
                      onChange={e => this.setState({ description: e.target.value })} />
                  </div>
                </div>
              </div>


              <div className="row">
                <button type="submit" value="create" className="btn btn-primary btn-lg btn-block" >create</button>
              </div>
              </div>
              <br />
            </form >
         
        </div>

       
{/* location modal */}


  





        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
           <div class="modal-content">

             <div class="modal-body">
               <SimpleMap />
             </div>

           </div>
         </div>
       </div>

</div>


     </div>

    );
  }
}
export default Create