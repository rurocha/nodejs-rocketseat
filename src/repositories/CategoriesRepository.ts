import Category from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const categorie = new Category();
    Object.assign(categorie, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(categorie);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string) {
    return this.categories.find((categorie) => categorie.name === name);
  }
}

export default CategoriesRepository;
