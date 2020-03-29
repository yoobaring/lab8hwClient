import React, {Component} from 'react';
import Student from './Student'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });
        
    }

    responseLogout = response => {
        
        this.setState({
            auth: false
            
        });
        
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                    <button onClick = {this.responseLogout}>logout</button>
                    <Student/>
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="204961557384548"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}