var get671dCache = '';
function get671d() {
  var e = new Date().getTime();
  get671dCache = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
    var n = (e + Math.random() * 16) % 16 | 0;
    e = Math.floor(e / 16);
    return (t == 'x' ? n : (n & 3) | 8).toString(16);
  });
  return get671dCache;
}

var tempVar = '';

function getId(data) {
  var dataTemp = data.split(' ');
  return (tempVar = dataTemp);
}

function get41d() {
  return {
    "p": [tempVar]
  };
}

function get941d() {
  var puid;
  if (typeof sjcl !== 'undefined' && tempVar) {
    var hash = sjcl.hash.sha256.hash(tempVar[0]);
    puid = sjcl.codec.hex.fromBits(hash);
    puid = sjcl.hash.sha256.hash(puid);
    puid = sjcl.codec.hex.fromBits(puid);
  }
  return puid;
}

function properkey(key) {
  try {
    return key;
  } catch (error) {
    return error;
  }
}
