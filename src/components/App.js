import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('swimming');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};


// class App extends React.Component {

//     state = { videos: [], selectedVideo: null };

//     onSearchSubmit = async term => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: term
//             }
//         });
//         console.log(response.data.items);
//         this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
//     };

//     onVideoSelect = video => {
//         // console.log('Dekho kya bna', video);
//         this.setState({ selectedVideo: video });
//     };

//     render() {
//         return <div className="ui container">
//             <SearchBar onFormSubmit={this.onSearchSubmit} />
//             <div className="ui grid">
//                 <div className="ui row">
//                     <div className="eleven wide column">
//                         <VideoDetail video={this.state.selectedVideo} />
//                     </div>
//                     <div className="five wide column">
//                         <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                     </div>
//                 </div>
//             </div>
//         </div>;
//     };
// }

export default App;