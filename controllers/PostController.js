/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import PostModel from '../models/Post.js';

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: 'Не удалось создать статью',
    });
  }
};
