import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource representation of a course.
 */
export interface CourseResource extends BaseResource {
  /**
   * Unique identifier for the course.
   */
  id: number;
  /**
   * Title of the course.
   */
  title: string;
  /**
   * Description of the course.
   */
  description: string;

  /**
   * Identifier for the category this course belongs to.
   */
  categoryId: number;
}

/**
 * Response envelope for course collection queries.
 */
export interface CoursesResponse extends BaseResponse {
  /**
   * An Array for course resources included in the response.
   */
  courses: CourseResource[];
}
