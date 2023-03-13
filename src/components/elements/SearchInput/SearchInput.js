// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './SearchInput.scss';
//
//
// function SearchInput(props) {
//     const [query, setQuery] = useState('');
//     const navigate = useNavigate();
//
//     function handleSubmit(event) {
//         event.preventDefault();
//         navigate("/search");
//         props.onSubmit(query);
//     }
//
//     // function handleSubmit(event) {
//     //     event.preventDefault();
//     //     console.log('Search query', query);
//     //     axios.get(`/api/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=5&s_track_rating=desc`)
//     //         .then(response => {
//     //             console.log('from Search input', response.data);
//     //             props.setTracksResults(response.data.message.body.track_list);
//     //             console.log('TracksResults', props.tracksResults);
//     //         })
//     //         .catch(error => {
//     //             console.log(error);
//     //         });
//     // }
//
//     const handleInputChange = (event) => {
//         setQuery(event.target.value);
//     };
//
//     // useEffect(() => {
//     //     console.log('tracksResults changed:', props.tracksResults);
//     // }, [props.tracksResults]);
//
//     return (
//         <form method="get" className="search-form" onSubmit={handleSubmit}>
//             <label htmlFor="search-input" className="search-form__input-label">
//                 <input id="search-input"
//                        type="text"
//                        className="search-form__input"
//                        placeholder="Enter song / album / artist"
//                        autoComplete="off"
//                        value={query}
//                        onChange={handleInputChange}
//                 />
//             </label>
//             <button type="submit" className="search-form__button">
//                 <span className="search-form__button-text">search</span>
//             </button>
//         </form>
//     )
// }
//
// export default SearchInput;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './SearchInput.scss';


const SearchInput = (props) => {
    const [query, setQuery] = useState('');
    const { tracksResults, setTracksResults } = props;

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Search query', query);
        axios.get(`/api/ws/1.1/track.search?apikey=${process.env.REACT_APP_API_KEY}&q_track=${query}&page_size=10&page=1&s_track_rating=desc`)
            .then(response => {
                console.log('from Search input', response.data);
                setTracksResults(response.data.message.body.track_list);
                console.log('TracksResults', tracksResults);
                navigate(`/search?q=${encodeURIComponent(query)}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };


    return (
        <form method="get" className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input" className="search-form__input-label">
                <input id="search-input"
                       type="text"
                       className="search-form__input"
                       placeholder="Enter song / album / artist"
                       autoComplete="off"
                       value={query}
                       onChange={handleInputChange}
                />
            </label>
            <button type="submit" className="search-form__button">
                <span className="search-form__button-text">search</span>
            </button>
        </form>
    )
}

export default SearchInput;