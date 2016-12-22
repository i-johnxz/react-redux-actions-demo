import { createAction } from 'redux-actions'
import { get } from '../utils/api'

export const getUsers = createAction(
  'GET_USERS',
  query => get('organization/query/getorgunits/user', query)
)