import {BaseEntity} from '../../../shared/infrastructure/base-entity';

/**
 * Represents a course category in the learning domain model.
 */
export class Category implements BaseEntity {
  /**
   * Creates a new category entity.
   * @param props - Initialization values.
   */
  constructor(props: { id: number; name: string }) {
    this._id = props.id;
    this._name = props.name;
  }

  /**
   * The unique identifier for the category.
   */
  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  /**
   * The name of the category.
   */
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
