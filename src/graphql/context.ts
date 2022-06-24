import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';

export type Context = {
  prisma: PrismaClient;
};

type createContextProps = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export async function createContext({
  req,
  res,
}: createContextProps): Promise<Context> {
  return { prisma };
}
