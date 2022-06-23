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
        className={`rounded-lg   ${
          hasBorder
            ? ' w-16 h-16 border-4 border-solid box-border border-gray-800 outline outline-2 outline-green-500'
            : ' w-12 h-12'
        }`}
      />
    );
  }

  return (
    <img
      src={src}
      className={`rounded-lg   ${
        hasBorder
          ? ' w-16 h-16 border-4 border-solid box-border border-gray-800 outline outline-2 outline-green-500'
          : ' w-12 h-12'
      }`}
    />
  );
}
