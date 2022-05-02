import express, { Request, Response } from 'express';
import Category from '../../entities/tags';
import { v4 as uuidV4 } from 'uuid';
const router = express.Router();

interface CategoryInput {
  title: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body as CategoryInput;
    console.log('request', req.body);

    // validation näide
    if (!title || !content) {
      //if (!authorId) {
      return res.json({ error: 'all fields must be filled' });
    }
    // TODO: valideeri jsonid (nt. sanitize ja validate)

    const titleCheck = await Category.findOne({ title: title });
    if (titleCheck) {
      return res.json({
        message:
          'There is a category with this title already: ' + titleCheck.title
      });
    }

    const post = Category.create({
      title: title,
      metaTitle: title.replace(/\s/g, '-'),
      content: content
    });
    console.log(Category);
    const newCategory = await Category.save([]);
    if (!newCategory) {
      // TODO: parem logger vahevara kasutusele võtta
      console.log({ error: 'unable to save post' });
      // TODO: error handling vahevara luua (ühtlustada errori kuvamine)
      return res.json({
        error: 'Unable to create category',
        message: 'typeorm save'
      });
    }

    return res.json(newCategory);
  } catch (error) {
    console.log('Unknown databse error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to create category',
        message: error.message
      });
    }
    return res.json({
      error: 'Unable to create category',
      message: 'Unknown error'
    });
  }
});

export default router;
