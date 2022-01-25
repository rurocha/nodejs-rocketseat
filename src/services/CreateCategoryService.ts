import CategoriesRepository from "../repositories/CategoriesRepository";

interface ICreateCategoryRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: ICreateCategoryRequest): void {
    console.log("aaaaaa", name, description);
    const isCategoryExists = this.categoriesRepository.findByName(name);
    if (isCategoryExists) {
      throw new Error("Cat already exists");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export default CreateCategoryService;
