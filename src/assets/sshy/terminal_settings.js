var wsproxyURL = "ec2-3-19-142-178.us-east-2.compute.amazonaws.com";
var wsproxyPorts = { ws: 5999, wss: 6001 };
var wsproxyProto = "ws";

var ws,
  transport,
  settings,
  term = null;

// Test IE 11
if (window.msCrypto) {
  // Redirect window.crypto.getRandomValues() -> window.msCrypto.getRandomValues()
  window.crypto = {};
  window.crypto.getRandomValues = function (a) {
    return window.msCrypto.getRandomValues(a);
  };

  // PolyFill Uint8Array.slice() for IE 11 for sjcl AES
  if (!Uint8Array.prototype.slice) {
    Object.defineProperty(Uint8Array.prototype, "slice", {
      value: Array.prototype.slice,
    });
  }
}

var resizeInterval;
