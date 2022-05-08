import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
const router = express.Router();

// Find user by ID
router.get(':id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ id: id });

    return res.json(category);

    if (!Category) {
      return res.json({
        message: 'no Category found with given ID'
      });
    }

    return res.json(Category);
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find category',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unable to create new category',
      message: 'unknown error'
    });
  }
});

export default router;
