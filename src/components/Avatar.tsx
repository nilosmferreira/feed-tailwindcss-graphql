/* eslint-disable @next/next/no-img-element */

import { Person, User } from 'phosphor-react';

/* eslint-disable jsx-a11y/alt-text */
type AvatarProps = {
  hasBorder?: boolean;
  src?: string;
};
export function Avatar({ hasBorder = true, src }: AvatarProps) {
  if (!src) {
    return (
      <User
        className={`rounded-lg   w-16 h-16 border-4 border-solid ${
          hasBorder &&
          'box-border border-gray-800 outline outline-2 outline-green-500'
        }`}
      />
    );
  }

  return (
    <img
      src={src}
      className={`rounded-lg box-border  w-16 h-16 border-4 border-solid border-gray-800 outline outline-2 outline-green-500`}
    />
  );
}
