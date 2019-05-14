import * as React from 'react';
import Profile from 'components/Profile';

const ProfileContainer = () => {
  const [ name, setName ] = React.useState('');
  const [ job, setJob ] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleJob(e) {
    setJob(e.target.value);
  }

  return (
    <div>
      <div>
        <div>이름: <input type="text" onChange={handleName}/></div>
        <div>직업: <input type="text" onChange={handleJob}/></div>
      </div>
      <Profile name={name} job={job}/>
    </div>
  )
};

export default ProfileContainer;
