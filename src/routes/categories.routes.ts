import { Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/categories", (req, res) => {
  const data = categoriesRepository.list();

  return res.status(201).json({
    data,
  });
});

export default categoriesRoutes;
