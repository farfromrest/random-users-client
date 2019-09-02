# Random Users Client

React application that pulls users from the [random user generator api](https://randomuser.me/).

## Quick Code Overview

`src/index.js` starts the application and hangs on to the search and sorting state.

`src/containers/Users` uses `src/hooks/useRandomUsers` to fetch users from the api. It also uses `src/containers/Users/selector` to filter and sort the array of users to what the UI component will need.

`src/hooks/useRandomUsers` is a custom hook that returns the following:

- `users` the array of users.
- `isLoading` which is a boolean flag for loading state.
- `onUpdateUser` is a function to be used to update a specific user.
- `error` that is just for when the request fails.

The hook uses a reducer to keep the user data as ids and entities. The entities are keyd off the user id to make updates to specific users quicker.

`src/hooks/useRandomUsers/parseUser` is just a data massager of the api response to make it more aligned with what we need.

`src/components/SearchBox` renders the search field.

`src/components/SortBox` renders a simple button that toggles the state of sorting.

`src/components/UserCard` renders the card for a user. It also is responsible for toggling into an editing state that allows you to edit the name.

`src/components/Users` is rendered by the container and handles loading and error states. If there are users it will render `UserCard`s for each user.

## Additional Notes

- react testing library!
- css modules
- Instead of passing down `onUpdateUser` a few levels down, the users state could be put in a context at the root to allow the `UserCard` to call an update function.
