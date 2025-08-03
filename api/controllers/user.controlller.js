const test = (req, resp) => {
  resp.json({
    message: "Welcome to the test api",
    value: true,
  });
};

module.exports = {test}