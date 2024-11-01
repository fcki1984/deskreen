let host;
let protocol;
let port;

if (!host && !protocol && !port) {
  host = window.location.host.split(':')[0];
  protocol = 'http';
  port = 31318;
}

export default {
  host,
  port,
  protocol,
};
