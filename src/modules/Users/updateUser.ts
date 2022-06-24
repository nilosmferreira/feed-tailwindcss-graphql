import { Context } from '../../graphql/context';

export type UpdateUserResponse = {
  data: {
    id: string;
    name?: string;
    image?: string;
    occupation?: string;
  };
};

export const UpdateUserUseCase = async (
  { data }: UpdateUserResponse,
  context: Context
) => {
  const { prisma } = context;
  const { id } = data;
  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!userAlreadyExists) {
    throw new Error('User does not exist');
  }

  return await prisma.user.update({
    where: {
      id,
    },
    data,
  });
};
