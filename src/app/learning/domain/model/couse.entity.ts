import {Category} from './category.entity';

/**
 * Represents a course aggregate in the learning domain model.
 */
export class Course {
  /**
   * Unique identifier for the course.
   */
  #id: number;

  /**
   * Title of the course.
   */
  #title: string;

  /**
   * Description of the course.
   */
  #description: string;

  /**
   * Identifier of the category associated with the course.
   */
  #categoryId: number;

  /**
   * The category object associated with the course, or null if not set.
   */
  #category: Category | null;

  /**
   * Creates a new instance of the Course class.
   *
   * @param course - An object containing optional properties to initialize the course.
   * @param course.id - The unique identifier for the course.
   * @param course.title - The title of the course.
   * @param course.description - The description of the course.
   * @param course.categoryId - The identifier of the category associated with the course.
   */
  constructor(course: { id: number; title: string; description: string; categoryId: number; category?: Category | null }) {
    this.#id = course.id;
    this.#title = course.title;
    this.#description = course.description;
    this.#categoryId = course.categoryId;
    this.#category = course.category ?? null;
  }

  /**
   * The category associated with the course.
   * @remarks
   * This is an object reference to the {@link Category} entity. It may be null if not set.
   */
  get category(): Category | null {
    return this.#category;
  }

  /**
   * Sets the category associated with the course.
   *
   * @param value - The {@link Category} to associate with the course.
   */
  set category(value: Category | null) {
    this.#category = value;
  }

  /**
   * Gets the course id.
   * @returns The unique identifier for the course.
   */
  get id(): number {
    return this.#id;
  }

  /**
   * Sets the course id.
   * @param value - The unique identifier to set for the course.
   */
  set id(value: number) {
    this.#id = value;
  }

  /**
   * Gets the course title.
   * @returns The title of the course.
   */
  get title(): string {
    return this.#title;
  }

  /**
   * Sets the course title.
   * @param value - The title to set for the course.
   */
  set title(value: string) {
    this.#title = value;
  }

  /**
   * Gets the course description.
   * @returns The description of the course.
   */
  get description(): string {
    return this.#description;
  }

  /**
   * Sets the course description.
   * @param value - The description to set for the course.
   */
  set description(value: string) {
    this.#description = value;
  }

  /**
   * Gets the category id associated with the course.
   * @returns The identifier of the category.
   */
  get categoryId(): number {
    return this.#categoryId;
  }

  /**
   * Sets the category id associated with the course.
   * @param value - The identifier of the category to associate with the course.
   */
  set categoryId(value: number) {
    this.#categoryId = value;
  }
}
