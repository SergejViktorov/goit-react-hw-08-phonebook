import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = `https://connections-api.herokuapp.com`

const register = createAsyncThunk('auth/register', async (credentials) => {
	try {
		const { data } = await axios.post('/users/signup', credentials)
		return data
	} catch (error) {}
})

const logIn = createAsyncThunk('auth/login', async (credentials) => {
	try {
		const { data } = await axios.post('/users/login', credentials)
		return data
	} catch (error) {}
})

const logOut = createAsyncThunk('auth/logout', async () => {
	try {
		await axios.post('/user/logout')
	} catch (error) {}
})

const authOperations = {
	register,
	logIn,
	logOut,
}
export default authOperations
