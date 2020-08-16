module.exports = {
  index: async ({ Serie }, req, res) => {
    try {
      const series = await Serie.find({});
      res.status(200).json(series);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  create: async ({ Serie }, req, res) => {
    try {
      const serie = await new Serie(req.body);
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
