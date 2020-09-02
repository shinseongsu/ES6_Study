const roles = new Set();

roles.add("User");
roles.add("Admin");

console.log(roles.size);

roles.add("User");
console.log(roles.size);

roles.delete("Admin");
console.log(roles);

const naughty = new WeakSet();

const children = [{ name: "Suzy" }, { name: "Derek" }];

naughty.add(children[1]);

for (let child of children) {
  if (naughty.has(child)) {
    console.log(`Coal for ${child.name}`);
  } else {
    console.log(`Presents for ${child.name}`);
  }
}
