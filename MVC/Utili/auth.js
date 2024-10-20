const jwt = require("jsonwebtoken");
const secret_key =
  "%k<e$LVCL2M'<dj>9A0Fj}?//WQ4`&%B`1|Ed~wE+i+OFt!y@H]I}~.(9:>}3Q~";

exports.createToken = (obj) => {
  return jwt.sign(obj, secret_key, { expiresIn: "1h" });
};

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(404).send("Access denied");
    }
    const verified = jwt.verify(token, secret_key);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
