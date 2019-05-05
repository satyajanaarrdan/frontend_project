import React, { Component } from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStylesForModal={
    content:{
        top:"50%",
        left:"50%",
        right:"auto",
        bottom:"auto",
        marginRight:'-100%',
        transform:'translate(50%,-50%)'
    }
}

const TabContainer=function(props){
    return(
        <Typography component="div" style={{padding:0, textAlign:"center"}}>
            {props.children}
        </Typography>
    );
}

// PropTypes which is used for checking required values are displaying or not
TabContainer.prototype={
    children:PropTypes.node.isRequired
}

class Header extends Component {

    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0,
            userNameRequired:"dispNone",
            passwordRequired:"dispNone",
            username:"",
            password:"",
            isOpen:true
        };
    }


    openModalHandler=()=>{
           this.setState({modalIsOpen:true});

           this.setState({
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            passwordRequired:"dispNone",
            password:"",
            username: ""
        });
    }
    closeModalHandler=()=>{
        this.setState({modalIsOpen:false});
        }
    tabChangeHandler=(event,value)=>{
            this.setState({value});
    }

    loginClickHandler=()=>{
        this.state.username === "" ? this.setState({userNameRequired:"dispBlock"}) :this.setState({userNameRequired:"dispNone"});    
        this.state.password === "" ? this.setState({passwordRequired:"dispBlock"}) :this.setState({passwordRequired:"dispNone"});  
    }
    inputUserNameChangeHandler=(e)=>{
            this.setState({userName:e.target.value})
        }
        inputPasswordChangeHandler=(e)=>{
            this.setState({password:e.target.value});
        }

       
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="app-log" />
                    <div className="login-button">
                      <Button variant="contained" color="default"  onClick={this.openModalHandler} className="login-button">
                        Login
                     </Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen}
                     contentLabel="Login" onRequestClose={this.closeModalHandler}
                        style={customStylesForModal}>
                    <Tabs value={this.state.value} className="tabs" onChange={this.tabChangeHandler} >
                        <Tab label="Login"/>
                        <Tab label="Register"/>
                    </Tabs>
                    { this.state.value === 0 &&
                    <TabContainer>
                        {/* props.children is used to render that what is present inside the tabcontainer closing and opening tags
                        will render to the browser */}
                        <FormControl required>
                            <InputLabel htmlFor="username">UserName </InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUserNameChangeHandler}/>
                            
                                <FormHelperText className={this.state.userNameRequired}>
                                    <span className="red">Required</span>
                                 </FormHelperText>
                        </FormControl>
                            <br/><br/>
                        <FormControl>
                            <InputLabel htmlFor="password">Password </InputLabel>
                            <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired} >
                                    <span className="red">Required</span>
                                 </FormHelperText>
                        </FormControl>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}

export default Header;