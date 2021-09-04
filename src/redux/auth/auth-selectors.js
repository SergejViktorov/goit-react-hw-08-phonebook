const getIsLoggedIn = (state) => state.auth.isLoggedIn
const getUserName = (state) => state.auth.user.name
console.log(getIsLoggedIn)
const authSelectors = {
	getIsLoggedIn,
	getUserName,
}
export default authSelectors
