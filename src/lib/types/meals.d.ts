export type Category  = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export type CategoriesResponse  = {
  categories: Meals[];
};