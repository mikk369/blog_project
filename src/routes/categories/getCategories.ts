import express, { Request, Response } from 'express';
import Category from '../../entities/Category';
const router = express.Router();

// Find user by ID
router.get('/', async (req: Request, res: Response) => {
  try {
    const { id, skip, take } = req.query;

    const categoriesQuery = await Category.createQueryBuilder('category')
      .limit(Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20)
      .offset(Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0);

    const categories = await categoriesQuery.getMany();

    return res.json(categories);
  } catch (error) {
    // TOTO: use better middleware as logger
    console.log('Database error');
    if (error instanceof Error) {
      return res.json({
        error: 'Unable to find categories',
        message: error.message
      });
    }
    // unknown (typeorm error?)
    return res.json({
      error: 'Unknown error: Unable find anything',
      message: 'unknown error'
    });
  }
});

export default router;
