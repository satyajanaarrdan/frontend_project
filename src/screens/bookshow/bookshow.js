import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../Home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import location from '../../common/location';
import language from '../../common/language';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import './bookshow.css';
import Input from '@material-ui/core/Input';

class BookShow extends Component{

    backtohomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    constructor(){
        super();
        this.state = {
           
            location: "",
            language: "",
            showDate: "",
            showTime: "",
            tickets:0,
            unitPrice:500,
            availableTickets:20
        }
    }

    locationChangeHandler=(event)=>{
        this.setState({ location: event.target.value });
    }
    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showTimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    ticketsChangeHandler=(event)=>{
        this.setState({tickets:event.target.value});

    }
    render(){
        return(
            <div>
                <Header/>
                <div className="bookShow">
                    <Typography className="back" onClick={this.backtohomeHandler}>
                        &#60; Back to Home
                    </Typography>
                    <Card className="cardStyle">
                        <CardContent>
                        <Typography variant="headline" component="h2">
                        Book Show
                    </Typography>

                    <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {showDate.map(sd => (
                                        <MenuItem key={"showDate" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showTime">Choose Show Time:</InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showTimeChangeHandler}
                                >
                                    {showTime.map(st => (
                                        <MenuItem key={"showTime" + st.id} value={st.showTime}>
                                            {st.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl required className="formControl">
                                        <InputLabel htmlFor="tickets">Tickets:({this.state.availableTickets} available)</InputLabel>
                                        <Input id="tickets" value={this.state.tickets !==0 ? this.state.tickets:""} onChange={this.ticketsChangeHandler}>
                                        </Input>

                            </FormControl>
                            <br /><br />
                        </CardContent>
                    </Card>

                </div>
            

            </div>
        )
    }
}
export default BookShow;