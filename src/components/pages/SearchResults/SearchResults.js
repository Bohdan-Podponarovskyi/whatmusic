// import React, { useEffect, Component } from 'react';
// import axios from "axios";
//
// class SearchResults extends Component {
//     const [tracksResults, setTracksResults] = useState([]);
//
//     console.log("hi from results")
//     useEffect(() => {
//         axios.get(`/api/ws/1.1/chart.tracks.get?apikey=${process.env.REACT_APP_API_KEY}&chart_name=top&page_size=10&page=1&country=it`)
//             .then(response => {
//                 console.log('from Search input', response.data);
//                 setTracksResults(response.data.message.body.track_list);
//                 console.log('from Search input', tracksResults);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);
//
//     return (
//         <div>
//             HIIIIIIII
//         </div>
//     );
// };
//
// export default SearchResults;
import React, {useState, Component} from 'react';
import axios from "axios";

class SearchResults extends Component {


    render() {
        return (
            <div>
HI
            </div>
        );
    }
}

export default SearchResults;