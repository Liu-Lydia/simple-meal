import moment from 'moment'

export default function calendar(stateTime, action) {
  const mmt = new moment(stateTime)

  switch (action.type) {
    case 'LAST_MONTH':
      mmt.subtract(1, 'month')
      break

    case 'NEXT_MONTH':
      mmt.add(1, 'month')
      break

    default:
      break
  }

  console.log(mmt.format('YYYY-MM-DD'))
  return mmt.format('YYYY-MM-DD')
}
