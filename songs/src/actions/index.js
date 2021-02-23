// named export - allows you to export many functions from a single file
export const selectSong = song => {

    // return an action
    // MUST RETURN JS OBJECT
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

