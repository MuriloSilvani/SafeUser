import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import * as bcrypt from 'bcrypt';

async function test() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: true,
  });

  await dataSource.initialize();

  // Create a test user
  const userRepo = dataSource.getRepository(User);
  const hashedPassword = await bcrypt.hash('test123', 10);

  const user = new User();
  user.name = 'Test User';
  user.email = 'test@example.com';
  user.password = hashedPassword;

  await userRepo.save(user);
  console.log('User created:', user);

  // Test password validation
  const foundUser = await userRepo.findOne({
    where: { email: 'test@example.com' },
  });
  if (foundUser) {
    const isValid = await bcrypt.compare('test123', foundUser.password);
    console.log('Password validation result:', isValid);

    const isInvalid = await bcrypt.compare('wrongpassword', foundUser.password);
    console.log('Wrong password validation result:', isInvalid);
  }

  await dataSource.destroy();
}

test().catch(console.error);
