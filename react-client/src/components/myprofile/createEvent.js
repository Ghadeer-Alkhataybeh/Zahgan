import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GoogleMapReact from 'google-map-react';
import $ from 'jquery';
import './profile.css'







const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class FormDialog extends React.Component {


    static defaultProps = {
        center: {
            lat: 31.95522,
            lng: 35.94503,

        },
        zoom: 10
    };
    state = {
        open: false,
        host: '',
        event: '',
        cost: '',
        description: '',
        photo: '',
        sets: '',
        date: '',
        location: '',
        items: [],
        map: ''
    };

    handleClickOpen = () => {
        this.props.handleclick()
        this.setState({ open: true });
    };

    handleClose = () => {
        this.props.handleclick()
        var obj = {
            creatorName: this.state.host,
            eventName: this.state.event,
            cost: this.state.cost,
            des: this.state.description,
            url: this.state.photo,
            availableSeats: this.state.sets,
            date: this.state.date,
            eventLocation: this.state.location,
            attending: [],
            approve: 0
        }

        console.log(obj)
        $.ajax({
            type: "POST",
            url: '/create',
            data: {
                obj
            },
            success: function (data) {
                console.log("ajax data", data)
            }
        });

    };

    componentDidUpdate(prevProps) {
        if (prevProps.open != this.props.open) {
            this.setState({
                open: this.props.open
            })


        }

    }


    handleClickedMap = (e) => {
        let latitude = e.lat
        let longtitude = e.lng
        console.log(e)
        console.log(this.state)
        this.setState({
            location: { latitude, longtitude },
            map: latitude + '/' + longtitude
        })



    }

    render() {
        return (
            <div>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create event</DialogTitle>
                    <DialogContent >
                        <DialogContentText style={{ 'width': '2000px' }}> </DialogContentText>
                        
                        <TextField onChange={(e) => { this.setState({ host: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="User Name..."
                            type="text"
                            required
                            InputProps={{
                                style: {
                                    fontSize:20,
                                },
                            }}
                            fullWidth
                            variant="standard"

                        />
                        <TextField onChange={(e) => { this.setState({ event: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Event Name..."
                            type="text"
                            fullWidth
                        />
                        <TextField onChange={(e) => { this.setState({ cost: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Event Cost..."
                            type="number"
                            fullWidth
                        />
                        <TextField onChange={(e) => { this.setState({ photo: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="url photo..."
                            type="text"
                            fullWidth
                        />
                        <TextField onChange={(e) => { this.setState({ sets: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Number of seats.."
                            type="number"
                            fullWidth
                        />
                        <TextField onChange={(e) => { this.setState({ date: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Date and time.."
                            type="datetime-local"
                            fullWidth
                        />
                        <TextField value={this.state.map}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Event location.."
                            type="text"
                            fullWidth
                        />
                        <TextField onChange={(e) => { this.setState({ description: e.target.value }) }}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Event description.."
                            type="text"
                            fullWidth
                        />

                        <div className="col-sm-2"><button type="button" className="btn btn-dark" data-toggle="modal" data-target="#myModal">Map</button></div>

                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                <div className="modal-content">

                                    <div className="modal-body">
                                        <div style={{ height: '100vh', width: '100%' }}>
                                            <GoogleMapReact onClick={this.handleClickedMap}
                                                bootstrapURLKeys={{ key: "AIzaSyD2IjGONmJ7Si4cNEZtNPNgPy5pVEt-_14" }}
                                                defaultCenter={this.props.center}
                                                defaultIcon={this.props.Marker}
                                                defaultZoom={this.props.zoom}
                                            >
                                                <AnyReactComponent
                                                    lat={31.95522}
                                                    lng={35.94503}


                                                />
                                            </GoogleMapReact>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" >
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Submit
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}