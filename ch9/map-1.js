const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

// 선언
// const userRoles = new Map();

// userRoles.set(u1, "User");
// userRoles.set(u2, "User");
// userRoles.set(u3, "Admin");

// userRoles.set(u1, "User").set(u2, "User").set(u3, "Admin");

const userRoles = new Map([
  [u1, "User"],
  [u2, "User"],
  [u3, "Admin"],
]);

console.log(userRoles.get(u2)); // User

console.log(userRoles.has(u1)); // true
console.log(userRoles.get(u1)); // User
console.log(userRoles.has(u4)); // false
console.log(userRoles.get(u4)); // undefined

console.log(userRoles.get(u1)); // User
userRoles.set(u1, "Admin");
console.log(userRoles.get(u1)); // Admin

console.log(userRoles.size); // 3

for (let u of userRoles.keys()) {
  console.log(u.name);
}

/*
 * Cynthia
 * Jackson
 * Olive
 */

for (let r of userRoles.values()) {
  console.log(r);
}

/*
  Admin
  User
  Admin
*/

for (let ur of userRoles.entries()) {
  console.log(`${ur[0].name}: ${ur[1]}`);
}

/*
  Cynthia: Admin
  Jackson: User
  Olive: Admin
*/

for (let [u, r] of userRoles.entries()) {
  console.log(`${u.name}: ${r}`);
}

/*
 Cynthia: Admin
  Jackson: User
  Olive: Admin 
*/

for (let [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

/*
  Cynthia: Admin
  Jackson: User
  Olive: Admin
*/

userRoles.delete(u2);
console.log(userRoles.size); // 2

userRoles.clear();
console.log(userRoles.size); // 0
