function findNeedle(haystack) {
  if (haystack.length === 0) return "no haystack here!";
  if (haystack.shift() === "neddle") return "found it!";
  return findNeedle(haystack);
}

console.log(findNeedle(["hay", "hay", "hay", "neddle", "hay", "hay"]));
