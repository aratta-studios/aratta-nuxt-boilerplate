export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.login.isLoggedIn) {
    return redirect('/login')
  }
}
