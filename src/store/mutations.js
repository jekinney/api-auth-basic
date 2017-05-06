import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
    if (isEmpty(token)) {
        localforage.removeItem('authtoken', token)
        return
    }
    localforage.setItem('authtoken', token)
}

export const setAuthenticated = (state, trueOrFalse) => {
    state.user.authenticated = trueOrFalse
}

export const setUserData = (state, user) => {
	return state.user.data = user
}

export const toggleShowLoginModal = (state) => {
	return state.showLoginModal = !state.showLoginModal
}

export const toggleShowRegisterModal = (state) => {
	return state.showRegisterModal = !state.showRegisterModal
}