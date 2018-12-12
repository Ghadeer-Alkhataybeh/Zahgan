import React from 'react';
import logo from '../../image/create.jpg';
import './profile.css'
import FormDialog from './createEvent'
import FormView from './viewEvents'





class Myprofile extends React.Component {

    state = {
        open: false,
        open2:false
        
    }
    handleclick = (e) => {
        
        this.setState({ open: !this.state.open });
        
        
    }

    handleclick2 = (e) => {
        console.log(999999999)
        this.setState({ open2: !this.state.open2 });
        console.log(this.state)
        
    }

    render() {
        console.log(localStorage.email)
        return (
            <div >
                <div className="maindiv" onClick={this.handleclick}>
                    <div className="container-fluid " >
                        <div className="card cardprofile">
                            <div className="card-body">
                                <img className="card-img-top imgprofile" src={logo} alt="Card image cap"></img>
                                <span className="spanprofile">Press to create an Event.......</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maindiv"  onClick={this.handleclick2}>
                    <div className="container-fluid ">
                        <div className="card cardprofile">
                            <div className="card-body">
                                <img className="card-img-top imgprofile" src={logo} alt="Card image cap"></img>
                                <span className="spanprofile">My Event.......</span>
                            </div>
                        </div>
                    </div>
                </div>

             <FormDialog className="formdialog" open={this.state.open} handleclick={this.handleclick}/>
             <FormView  open={this.state.open2}  handleclick2={this.handleclick2}/>
            </div>
        )
    }
}

export default Myprofile