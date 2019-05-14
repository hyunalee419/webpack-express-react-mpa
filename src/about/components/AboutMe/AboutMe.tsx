import * as React from 'react';

type Props = {
  children: React.ReactNode
}

export default ({
  children = 'about~~~~~~~~~~^_^'
}: Props) => (
  <div>{children}</div>
);
