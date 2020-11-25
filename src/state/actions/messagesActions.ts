import { messagesActionTypes as Actions } from '../actionsTypes';
import axios from 'axios'

export const getMessages = () => async (dispatch: any) => {
  dispatch({
    type: Actions.GET_MESSAGES,
  });
  try{
    const res = await axios.get(`https://api.mocki.io/v1/01ce1c8d`)
    dispatch( {
      type: Actions.GET_MESSAGES_SUCCESS,
      payload: res.data
    })
  }
  catch(e){
    dispatch( {
      type: Actions.GET_MESSAGES_FAILURE,
      payload: console.log(e),
    })
  }

}