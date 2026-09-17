import {inject, Injectable} from '@angular/core';
import {BaseApi} from '../../shared/infrastructure/base-api';
import {Course} from '../domain/model/couse.entity';
import {Category} from '../domain/model/category.entity';
import {HttpClient} from '@angular/common/http';
import {CoursesApiEndpoint} from './courses-api-endpoint';
import {CategoriesApiEndpoint} from './categories-api-endpoint';
import {Observable} from 'rxjs';

/**
 * Infrastructure facade for course and category endpoint operations.
 */
@Injectable({providedIn: 'root'})
export class LearningApi extends BaseApi {
  private readonly http = inject(HttpClient);
  private readonly coursesEndpoint = new CoursesApiEndpoint(this.http);
  private readonly categoriesEndpoint = new CategoriesApiEndpoint(this.http);

  /**
   * Retrieves all courses.
   * @returns Stream with the course collection.
   */
  getCourses = (): Observable<Course[]> =>
    this.coursesEndpoint.getAll();

  /**
   * Retrieves a single course by ID.
   * @param id - The ID of the course.
   * @returns An Observable of the Course object.
   */
  getCourse = (id: number): Observable<Course> =>
    this.coursesEndpoint.getById(id);

  /**
   * Creates a new course.
   * @param course - The course to create.
   * @returns An Observable of the created Course object.
   */
  createCourse = (course: Course): Observable<Course> =>
    this.coursesEndpoint.create(course);

  /**
   * Updates an existing course.
   * @param course - The course to update.
   * @returns An Observable of the updated Course object.
   */
  updateCourse = (course: Course): Observable<Course> =>
    this.coursesEndpoint.update(course, course.id);

  /**
   * Deletes a course by ID.
   * @param id - The ID of the course to delete.
   * @returns An Observable of void.
   */
  deleteCourse = (id: number): Observable<void> =>
    this.coursesEndpoint.delete(id);

  /**
   * Retrieves all categories.
   * @returns Stream with the category collection.
   */
  getCategories = (): Observable<Category[]> =>
    this.categoriesEndpoint.getAll();

  /**
   * Retrieves a single category by ID.
   * @param id - The ID of the category.
   * @returns An Observable of the Category object.
   */
  getCategory = (id: number): Observable<Category> =>
    this.categoriesEndpoint.getById(id);

  /**
   * Creates a new category.
   * @param category - The category to create.
   * @returns An Observable of the created Category object.
   */
  createCategory = (category: Category): Observable<Category> =>
    this.categoriesEndpoint.create(category);

  /**
   * Updates an existing category.
   * @param category - The category to update.
   * @returns An Observable of the updated Category object.
   */
  updateCategory = (category: Category): Observable<Category> =>
    this.categoriesEndpoint.update(category, category.id);

  /**
   * Deletes a category by ID.
   * @param id - The ID of the category to delete.
   * @returns An Observable of void.
   */
  deleteCategory = (id: number): Observable<void> =>
    this.categoriesEndpoint.delete(id);
}
