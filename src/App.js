import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Sarvesh' },
  { id: 'u2', name: 'Shashi' },
  { id: 'u3', name: 'Tarun' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
