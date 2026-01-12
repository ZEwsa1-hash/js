function flat(array) {
  let result = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      result.push(...flat(item));
    } else {
      result.push(item);
    }
  }

  return result;
}