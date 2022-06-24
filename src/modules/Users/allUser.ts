import { PrismaClient } from '@prisma/client';

export const AllUserUseCase = (prisma: PrismaClient) => {
  return prisma.user.findMany();
};
