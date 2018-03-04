const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  total: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const good = {
        good: state.good+1,
        ok: state.ok,
        bad: state.bad,
        total: state.total+1
      }
      return good
    case 'OK':
      const ok = {
        good: state.good,
        ok: state.ok+1,
        bad: state.bad,
        total: state.total+1
      }
      return ok
    case 'BAD':
      const bad = {
        good: state.good,
        ok: state.ok,
        bad: state.bad+1,
        total: state.total+1
      }
      return bad
    case 'ZERO':
      const zero = {
        good: 0,
        ok: 0,
        bad: 0,
        total: 0
      }
      return zero
  }
  return state
}

export default counterReducer
