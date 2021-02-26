import React, { Component } from "react";
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';
import MovieCard from "./movie-card";

class DropDown extends Component {

    state = {
        dropDownOptions: [{
            show_id: 0,
        }],

    };
    changeHandler = async (event) => {
        const url = "https://api-tutorial4.herokuapp.com/movies?title_like=" + event.target.value;
        const { data: dropDownOptions } = await Axios.get(url);
        //this.state.dropDownOptions.show_iddropDownOptions);
        console.log("dfssdf")
        if (dropDownOptions.length > 0) {
            this.setState({ dropDownOptions });
            if (dropDownOptions.length == 1) {
                this.setState({ cardValue: dropDownOptions[0] });
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col align-self-center">
                        <h1> Tutorial-5 Website</h1>
                        <h3> Enter Movie name to see details</h3>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col align-self-center">
                        <input list="movieNames" type="text" placeholder="Enter Movie Name..." onChange={this.changeHandler} />
                        <datalist id="movieNames" >
                            {
                                this.state.dropDownOptions.map(dropDownOptions => (
                                    <option
                                        key={dropDownOptions.show_id}>
                                        {dropDownOptions.title}
                                    </option>
                                ))
                            }
                        </datalist>
                    </div>
                </div>

                <div className={this.checkCard() ? "card mt-5" : "invisible"}>

                    <div className="card-body">
                        <h5 className="card-title">{this.checkCard() ? this.state.cardValue.title : ""}</h5>
                        <p className="card-text">
                            <Link to={`/movie/${this.state.dropDownOptions[0].show_id}`}> Show Details</Link>
                        </p>

                        <Route path='/movie/:movieID' component={MovieCard} />
                    </div>
                </div>

            </div >
        );
    }
    //check if data for card exist
    checkCard() {
        if (this.state.cardValue === undefined) {
            return false
        }
        return true
    }
}
export default DropDown;
//render={(props) => <MovieCard {props}></MovieCard>}