import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration:'04:30' },
        { title: 'Insane', duration: '03:50' },
        { title: 'So Bad', duration: '04:10' },
        { title: 'Greatest', duration: '03:35' }    
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } 
    
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});