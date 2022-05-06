import { getUsername } from '../shared/getUsername';

test('fetches github user data', async () => {
  const username = await getUsername('gaeron');
  expect(username).toBeTruthy();
});