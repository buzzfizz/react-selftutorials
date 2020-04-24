import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{
			title: "No Scrubs",
			duration: "4:05",
		},
		{
			title: "No Scrubs 1",
			duration: "3:05",
		},
		{
			title: "No Scrubs 2",
			duration: "2:05",
		},
		{
			title: "No Scrubs 3",
			duration: "1:05",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
