export const authenticated = (state) => {
	return state.user.authenticated
}

export const user = (state) => {
	return state.user.data
}

export const showLoginModal = (state) => {
	return state.showLoginModal
}

export const showRegisterModal = (state) => {
	return state.showRegisterModal
}