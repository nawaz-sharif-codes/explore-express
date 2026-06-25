export function LoggerMiddleware(req, res, next) {
  console.log("request method :", req.method);
  console.log("request url :", req.url);
  console.log("request params :", req.params);
  console.log("request query :", req.query);
  console.log("request headers :", req.headers);
  console.log("request ipAddress :", req.ip);
  next();
}
