
import axios from 'axios';
import { CharecterResponse } from './entities/CharactersResponse';

export const getCharacters = () => {
    return axios.get<CharecterResponse>('https://rickandmortyapi.com/api/character');
};