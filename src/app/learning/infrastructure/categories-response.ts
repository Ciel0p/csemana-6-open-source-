import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Represents the API resource for a category in the infrastructure layer of the 'learning' bounded context.
 */
export interface CategoryResource extends BaseResource {
  /**
   * The unique identifier for the category.
   */
  id: number;

  /**
   * The name of the category.
   */
  name: string;

}

/**
 * Represents the API response structure for a list of categories in the infrastructure layer of the 'learning' bounded context.
 */
export interface CategoriesResponse extends BaseResponse {
  /**
   * The list of categories returned by the API.
   */
  categories: CategoryResource[];
}
