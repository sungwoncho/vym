export function getNextPage(link) {
  let re = /page=(\d).*>; rel="next"/;
  let result = re.exec(link);

  if (result) {
    return parseInt(result[1], 10);
  }
}
