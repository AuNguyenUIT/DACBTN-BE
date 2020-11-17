import express from 'express';

import bcrypt from 'bcryptjs';
import data from '../data.js';

import expressAsyncHandler from 'express-async-handler';
import Categories from '../models/categoriesModel.js';


const categoriesRouter = express.Router();

categoriesRouter.get(
  '',
  expressAsyncHandler(async (req, res) => {
    // await Categories.remove({});
    const createdCategories = await Categories.insertMany(data.categories);
    res.send({ createdCategories });
  })
);


export default categoriesRouter;
