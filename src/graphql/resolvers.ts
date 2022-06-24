import { AllUserUseCase } from '../modules/Users/allUser';
import {
  ChangePasswordResponse,
  ChangePasswordUseCase,
} from '../modules/Users/changePassword';
import {
  CreateUserRequest,
  CreateUserUseCase,
} from '../modules/Users/createUser';
import {
  UpdateUserResponse,
  UpdateUserUseCase,
} from '../modules/Users/updateUser';
import { Context } from './context';

export const resolvers = {
  Query: {
    Users: (parent, _data, _context) => {
      return AllUserUseCase(_context.prisma);
    },
  },
  Mutation: {
    signUp: (_parent, data: CreateUserRequest, context: Context) => {
      return CreateUserUseCase(data, context);
    },
    updateUser: (parent, data: UpdateUserResponse, context: Context) => {
      return UpdateUserUseCase(data, context);
    },
    changePassword: (
      _parent,
      data: ChangePasswordResponse,
      context: Context
    ) => {
      return ChangePasswordUseCase(data, context);
    },
  },
};
