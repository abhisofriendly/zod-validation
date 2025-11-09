import logo from './logo.svg';
import './App.css';
import { z } from 'zod';

function App() {

  const userSchema = z.object({
    firstName: z.string().nullish(),
    email: z.string().email(),
    profileUrl: z.string().url(),
    age: z.number().min(1),
    friends: z.array(z.string()).max(3),
    settings: z.object({
      isSubscribed: z.boolean(),
    })
  })

  const user = {
    firstName: 'Abhishek',
    email: 'contact@abhisofriendly.com',
    profileUrl: 'https://google.com',
    age: 18,
    friends: ['friend1', 'friend2', 'friend3'],
    settings: {
      isSubscribed: true
    }
  };

  console.log(userSchema.safeParse(user));

  return (
    <div>

    </div>
  );
}

export default App;
