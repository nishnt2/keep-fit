export function pgFormatDate(date) {
  function zeroPad(d) {
    return ("0" + d).slice(-2)
  }
  var parsed = new Date(date)
  return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(" ");
}