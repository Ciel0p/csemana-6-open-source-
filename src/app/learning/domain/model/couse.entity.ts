/**
 * Represents a course entity with id, title, and description.
 *
 * @remarks
 * This class is used as a domain model for courses in the learning module.
 */
export class Course {
  /**
   * Unique identifier for the course.
   */
  private _id: number;

  /**
   * Title of the course.
   */
  private _title: string;

  /**
   * Description of the course.
   */
  private _description: string;

  /**
   * Creates a new instance of the Course class.
   *
   * @param course - An object containing optional properties to initialize the course.
   */
  constructor(course: { id?: number; title?: string; description?: string }) {
    this._id = course.id ?? 0;
    this._title = course.title ?? '';
    this._description = course.description ?? '';
  }

  /**
   * Gets the course id.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Sets the course id.
   */
  set id(value: number) {
    this._id = value;
  }

  /**
   * Gets the course title.
   */
  get title(): string {
    return this._title;
  }

  /**
   * Sets the course title.
   */
  set title(value: string) {
    this._title = value;
  }

  /**
   * Gets the course description.
   */
  get description(): string {
    return this._description;
  }

  /**
   * Sets the course description.
   */
  set description(value: string) {
    this._description = value;
  }
}
