const initialState = [
  {
    content: 'Vamos pa llá default 1',
    id: 1,
    important: true
  },
  {
    content: 'Vamos pa llá default 2',
    id: 2,
    important: false
  },
]

export const noteReducer = (state = initialState, action) => {
  if (action.type === '@note/created') {
    // return state.concat(action.payload)
    return [...state, action.payload] // --> does the same as the prev line...
  }

  if (action.type === '@note/toggle_importance') {
    const { id } = action.payload

    return state.map(note => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }
  return state
}

  export const createNote = content => {
    return {
      type: '@note/created',
      payload: {
        content,
        important: false,
        id: generateId()
      }
    }
  }

  export const toggleImportanceOf = id => {
    return {
      type: '@note/toggle_importance',
      payload: { id }
    }
  }

  const generateId = () => {
    return Math.floor(Math.random() * 999999) + 1
  }