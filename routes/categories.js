import express from "express";
import { getAllCategories, createCategory, editCategory, deleteCategory } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.post('/', createCategory);
categoryRouter.post('/:id/edit', editCategory);
categoryRouter.post('/:id/delete', deleteCategory);

export default categoryRouter;