import { Router } from 'express';
import chirpsRouter from './chirps';
import booksRouter from './books';

let router = Router();

router.use('/chirps', chirpsRouter);
router.use('/books', booksRouter);

export default router;