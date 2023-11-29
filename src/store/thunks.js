import { filmsActions } from "./slices/filmsSlice"


export const fetchFilmsListByQuery = (query) => async(dispatch, getState) => {
    
    dispatch(filmsActions.setLoading(true))

    fetch(`https://www.omdbapi.com?apikey=64405bd2&s=${query}`)
    .then(response=> response.json())
    .then(data=>{
        dispatch(filmsActions.setLoading(false))
        dispatch(filmsActions.setFilmsList(data))
    })
}