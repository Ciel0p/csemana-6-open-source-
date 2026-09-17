import {BaseEntity} from '../../../shared/domain/model/base-entity';

/**
 * Represents a course category in the learning domain model.
 */
export class Category implements BaseEntity {
  /**
   * The unique identifier for the category.
   */
  #id: number;

  /**
   * The name of the category.
   */
  #name: string;

  /**
   * Creates a new category entity.
   * @param props - Initialization values.
   */
  constructor(props: { id: number; name: string }) {
    this.#id = props.id;
    this.#name = props.name;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}
