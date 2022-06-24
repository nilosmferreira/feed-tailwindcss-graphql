import { compare, hash } from 'bcrypt';
import { Context } from '../../graphql/context';

export type ChangePasswordResponse = {
  data: { id: string; current_password: string; new_password: string };
};
export const ChangePasswordUseCase = async (
  { data }: ChangePasswordResponse,
  context: Context
) => {
  const { prisma } = context;
  const userAlreadyExists = await prisma.user.findUnique({
    where: {
      id: data.id,
    },
  });
  if (!userAlreadyExists) {
    throw new Error('User does not exist');
  }
  const passwordIsEqual = await compare(
    data.current_password,
    userAlreadyExists.password
  );
  if (!passwordIsEqual) {
    throw new Error('Password does not match');
  }
  const hashPassword = await hash(data.new_password, 13);

  return await prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      password: hashPassword,
    },
  });
};
