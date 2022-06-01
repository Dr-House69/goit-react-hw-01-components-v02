import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
};
