const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let newRecord = record.find(e => e.result === 'W')
  if (typeof newRecord === 'undefined') {
    return 'undefined'
  } else {
    return newRecord.year
  }
}
