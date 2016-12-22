import { handleAction } from 'redux-actions'
import { getUsers } from '../actions'

const defaults = []
const users = handleAction(
  getUsers,
  //(state, action) => ({ data: action.payload }),
  (state, action) => ( action.payload.result ),
  defaults
)

export default users