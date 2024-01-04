const authenticateMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "Aspire@@2023") {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticateMiddleware;
