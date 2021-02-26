import React, { Component } from "react";
import Axios from 'axios';

class MovieCard extends Component {

    state = {
        movieDetails: []
    }
    async componentDidMount(props) {

        const url = "https://api-tutorial4.herokuapp.com/movies?show_id=" + this.props.match.params.movieID;

        const { data: movieDetails } = await Axios.get(url);
        this.setState({ movieDetails });

    }

    render() {
        return (
            <div>
                { console.log(this.state.movieDetails)}
                {

                    this.state.movieDetails.map(movieDetails =>
                        <div>
                            <h1> Title: {this.state.movieDetails[0].title}</h1>
                            <p> <b> Type: </b>{this.state.movieDetails[0].type}</p>
                            <p> <b> country: </b>{this.state.movieDetails[0].country}</p>
                            <p> <b> release_year:</b> {this.state.movieDetails[0].release_year}</p>
                            <p> <b> rating:</b> {this.state.movieDetails[0].rating}</p>
                            <p> <b> Description: </b> {this.state.movieDetails[0].description}</p>
                        </div>
                    )
                }
            </div>

        );
    }

}

export default MovieCard;