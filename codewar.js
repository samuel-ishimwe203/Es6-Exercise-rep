function arrayToString(arr) {
  function helper(element) {
    if (Array.isArray(element)) {
      // Recursively process nested arrays
      return "[" + element.map(helper).join(",") + "]";
    } 
    else if (typeof element === "string") {

      return `'${element}'`;
    } 
    else if (typeof element === "boolean" || typeof element === "number") {
      // Numbers & booleans stay as-is
      return String(element);
    } 
    else {
      // Fallback (in case of unexpected values)
      return String(element);
    }
  }

  return "[" + arr.map(helper).join(",") + "]"
}
