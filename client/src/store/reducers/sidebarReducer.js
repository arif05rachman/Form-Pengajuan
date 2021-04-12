const defaultState = {
  sidebarShow: 'responsive'
}

const sidebarShow = (state = defaultState, { type, ...rest }) => {
  switch (type) {
    case 'SET':
      return {...state, ...rest }
    default:
      return state
  }
}

export default sidebarShow