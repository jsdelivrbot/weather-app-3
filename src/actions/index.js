'use strict'

import axios from 'axios'

import { API_KEY } from '../keys'
import * as actions from './actions-type'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
console.log('API_KEY', API_KEY)
export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)
  return {
    type: actions.FETCH_WEATHER,
    payload: request
  }
}

export const inputSearchBar = (city) => {
  return {
    type: actions.INPUT_SEARCH_BAR,
    payload: city
  }
}
