import { isEmpty } from 'lodash'
import localforage from 'localforage'
import { setHttpToken } from '../helpers'

export const getUser = ({ commit }) => {
    return axios.get('/user')
    	.then((response) => {
        	commit('setAuthenticated', true)
        	commit('setUserData', response.data)
    	})
}

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch('checkTokenExists').then((token) => {
            setHttpToken(token)
        })
    }
    commit('setToken', token)
    setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
    return localforage.getItem('authtoken').then((token) => {
        if (isEmpty(token)) {
            return Promise.reject('NO_STORAGE_TOKEN');
        }
        return Promise.resolve(token)
    })
}

export const clearAuth = ({ commit }, token) => {
    commit('setAuthenticated', false)
    commit('setUserData', null)
    commit('setToken', null)
    setHttpToken(null)
}

export const postLogin = ({commit, dispatch}, credentials) => {
	return axios.post('/login', credentials).then( response => {
		dispatch('setToken', response.data.token)
		dispatch('getUser')
	}).catch( errors => {
		return errors.response.data
	})
}

export const postRegister = ({commit, dispatch}, {user, content}) => {
	return axios.post('/register', user).then( response => {
		commit('setUserData', response.data.user)
		dispatch('putUserSession', response.data.token)
	}).catch( errors => {
		return errors.response.data
	})
}

export const toggleLoginModal = ({commit}) => {
	commit('toggleShowLoginModal')
}

export const toggleRegisterModal = ({commit}) => {
	commit('toggleShowRegisterModal')
}

