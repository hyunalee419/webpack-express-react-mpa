import * as React from 'react';
import { connect } from 'react-redux';
import { SetIsSpinFull } from 'actions';
import Posts from 'components/Posts';

type Props = {
  setIsSpinFull?: (isSpinFull: boolean) => void;
}

const PostContainer: React.FunctionComponent<Props> = ({
  setIsSpinFull = undefined
}) => {
  const [ posts, setPosts ] = React.useState(null);

  async function getPosts() {
    try {
      setIsSpinFull(true);
      const response = await fetch('http://jsonplaceholder.typicode.com/todos');

      response.json().then((result) => {
        setPosts(result);
        setIsSpinFull(false);
      });
    } catch (e) {
      setIsSpinFull(false);
      console.warn(e.toString());
    }
  }

  function getPostsDefault() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        response.json().then((result) => {
          setPosts(result);
        });
      })
      .catch((e) => {
        console.warn(e.toString());
      });
  }

  return (
    <div>
      <Posts data={posts}/>
      <button onClick={getPosts}>get posts (fetch, http)</button>
      <button onClick={getPostsDefault}>get posts default (fetch, https)</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setIsSpinFull: (isSpinFull) => dispatch(SetIsSpinFull(isSpinFull))
});

export default connect(undefined, mapDispatchToProps)(PostContainer);
