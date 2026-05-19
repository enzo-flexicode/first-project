const unused = 42;
var alsoUnused = "leftover";

if (value == null) {
  console.log("nope");
}

function broken(a, b) {
  console.log("debug", a);
  return result != b;
}

const dup = 1;
broken(dup, undefinedArg);
