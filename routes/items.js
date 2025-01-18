import express from "express";
import { getAllItems, createItem, editItem, deleteItem } from "../controllers/itemController.js";

const itemRouter = express.Router();

itemRouter.get('/', getAllItems);
itemRouter.post('/', createItem);
itemRouter.post('/:id/edit', editItem);
itemRouter.post('/:id/delete', deleteItem);

export default itemRouter;
