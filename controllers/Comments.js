module.exports = {
  index: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const { comments } = await Serie.findOne({ _id });
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  create: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const { comments } = req.body;
      const serie = await Serie.update({ _id }, { $push: { comments } });
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  edit: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const serie = await Serie.findOne({ _id });
      const index = serie.comments.indexOf(req.body.comment);
      if (index === -1) {
        return res.status(406).json({ message: "Comentário não encontrado" });
      }
      serie.comments[index] = req.body.newComment;
      await serie.save();
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async ({ Serie }, req, res) => {
    try {
      const { _id } = req.params;
      const serie = await Serie.findOne({ _id });
      const index = serie.comments.indexOf(req.body.comment);
      if (index === -1) {
        return res.status(406).json({ message: "Comentário não encontrado" });
      }
      serie.comments.splice(index, 1);
      await serie.save();
      res.status(200).json(serie);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
