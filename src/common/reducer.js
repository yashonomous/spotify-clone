import actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_RESPONSE_HEADERS:
      return {
        ...state,
        responseHeaders: action.headers,
      };
    case actionTypes.SET_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: action.userProfile,
      };
    case actionTypes.SET_CURRENT_USER_PLAYLIST:
      return {
        ...state,
        currentUserPlaylist: action.userPlaylist,
      };
    case actionTypes.SET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.newReleases,
      };
    case actionTypes.SET_RECOMMENDATIONS:
      // debugger;
      return {
        ...state,
        recommendations: action.recommendations,
      };
    case actionTypes.SET_FEATURED_PLAYLISTS:
      return {
        ...state,
        featuredPlaylists: action.featuredPlaylists,
      };
    default:
      return state;
  }
};

export default reducer;
