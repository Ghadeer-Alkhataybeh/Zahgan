import React from 'react';


class Test extends React.Component {
    constructor(props){
        super(props)
        
        this.state={
            data:props.text
        }
    
        
        
    }

    componentDidUpdate(prevProps){
        if(prevProps.text!=this.props.text){
            this.setState({
                data:this.props.text
               })

        }
   
    }



    render(){

        return(
            <div>

                <p>{this.state.data}</p>
                <p>{this.props.text}</p>
            </div>

        )
    }
}

export default Test