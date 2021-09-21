import * as UserActionCreators from './user'
import * as TodoactionCreators from './todo'

export default {
    ...UserActionCreators,
    ...TodoactionCreators
}
