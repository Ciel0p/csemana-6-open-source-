import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource representation of a category.
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
 * Response envelope for category collection queries.
 */
export interface CategoriesResponse extends BaseResponse {
  /**
   * The list of categories returned by the API.
   */
  categories: CategoryResource[];
}
