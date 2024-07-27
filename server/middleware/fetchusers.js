var jwt = require("jsonwebtoken");
const JWT_SECRET = "HELLO";

const fetchusers = (req, res, next) => {
  const token = req.header("auth-token");
  try {
    if (!token) res.status(401).send({ error: "Login Required" });

    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Login is Required" });
  }
};

module.exports = fetchusers;
