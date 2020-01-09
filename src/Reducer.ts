export interface Action {
  type: String,
  // payload?: any // Not typesafe
}

// export interface State: any

export class Add implements Action {
  readonly type = 'Add' // Type declaration will cause the switch statement not be able to declare the required props.

  constructor (public payload: String) {
    this.payload = payload
  }
}

export class RemoveAll implements Action {
  readonly type = 'Remove All'
}

export type ReducerActions = Add | RemoveAll

interface State {
  items: String[]
}

function todoReducer (
  action: ReducerActions,
  state: State = { items: [] }
): State {
  switch (action.type) {
    case 'Add':
      // const payload = (<Add>action).payload

      return {
        items: [...state.items, action.payload]
      }
    case 'Remove All':
      return {
        items: []
      }
  }
}