import * as React from 'react';

type Props = {
  data: Array<PostProps & {id: number, userId: number}>;
}

const Posts: React.FunctionComponent<Props> = ({
 data
}: Props) => {
  const posts = data && data.map((post) => (
    <Post key={post.id} {...post} />
  ));
  return (
    <ul>
      {posts}
    </ul>
  );
};

type PostProps = {
  title: string;
  completed: boolean;
}

const Post: React.FunctionComponent<PostProps> = ({
  title, completed
}: PostProps) => (
  <li>{title}, {completed}</li>
);

export default Posts;
