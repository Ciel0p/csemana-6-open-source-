import {BaseResource, BaseResponse} from '../../shared/infrastructure/base-response';

/**
 * Resource interface for user data.
 */
export interface UserResource extends BaseResource {
  id: number;
  username: string;
}

/**
 * Response interface for users API calls.
 */
export interface UsersResponse extends BaseResponse {
  courses: UserResource[];
}
