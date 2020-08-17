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
      const serie = await Serie.create(req.body);
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  edit: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const serie = await Serie.update({ _id }, req.body);
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const serie = await Serie.deleteOne({ _id });
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
