// findUserByUsername

function findUserByUsername(arr, username) {
  return arr.find(function (val) {
    return val["username"] === username;
  });
}

// removeUser

function removeUser(arr, username) {
  const objIndx = arr.findIndex(function (val) {
    return val["username"] === username;
  });
  if (objIndx === -1) return;
  return arr.splice(objIndx, 1)[0];
}
