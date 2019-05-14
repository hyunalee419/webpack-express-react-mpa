import * as React from 'react';
import { connect } from 'react-redux';
import ProfileContainer from 'containers/ProfileContainer';
import PostContainer from 'containers/PostContainer';
import Spinner from 'components/common/Spinner';
import './App.scss';

type Props = {
  children: React.ReactNode;
  isSpinFull?: boolean;
}

class App extends React.Component<Props> {
  static defaultProps = {
    isSpinFull: false
  };

  render() {
    const { children, isSpinFull } = this.props;
    return (
      <div id="app">
        { isSpinFull && <Spinner/> }
        <div>{children}</div>
        <ProfileContainer/>
        <PostContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isSpinFull: state.isSpinFull
});

export default connect(mapStateToProps)(App);
