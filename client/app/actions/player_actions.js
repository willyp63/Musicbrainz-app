import {getYtid} from '../util/youtube_api_util'

export function playSong(song) {
  return function (dispatch) {
    dispatch(requestYtid(song))
    return getYtid(song, function (ytid) {
      dispatch(receiveYtid(ytid))
    })
  }
}

export const REQUEST_YTID = 'REQUEST_YTID'
function requestYtid(song) {
  return {type: REQUEST_YTID, song}
}

export const RECEIVE_YTID = 'RECEIVE_YTID'
function receiveYtid(ytid) {
  return {type: RECEIVE_YTID, ytid}
}
