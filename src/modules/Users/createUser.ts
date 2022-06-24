import { hash } from 'bcrypt';
import { Context } from '../../graphql/context';

export type CreateUserRequest = {
  data: {
    name: string;
    email: string;
    password: string;
    occupation: string;
    image?: string;
  };
};
export const CreateUserUseCase = async (
  { data }: CreateUserRequest,
  context: Context
) => {
  const userAlreadyExists = await context.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (userAlreadyExists) {
    console.log(userAlreadyExists);
    throw new Error('User already exists');
  }
  data.password = await hash(data.password, 13);
  return await context.prisma.user.create({
    data,
  });
};
