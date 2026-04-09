import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import * as bcrypt from 'bcrypt';

async function testFullFlow() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: true,
  });

  await dataSource.initialize();
  const userRepo = dataSource.getRepository(User);

  console.log('=== Testing User Creation and Login Flow ===');

  // Clean up any existing test users
  await userRepo.delete({ email: 'test@example.com' });

  // Create a test user
  const hashedPassword = await bcrypt.hash('test123', 10);
  const user = new User();
  user.name = 'Test User';
  user.email = 'test@example.com';
  user.password = hashedPassword;

  const savedUser = await userRepo.save(user);
  console.log('✅ User created successfully');
  console.log('User ID:', savedUser.id);
  console.log('User Email:', savedUser.email);

  // Test finding user by email
  const foundUser = await userRepo.findOne({
    where: { email: 'test@example.com' },
  });
  if (!foundUser) {
    console.log('❌ User not found by email');
    return;
  }
  console.log('✅ User found by email');

  // Test password validation
  const isValidPassword = await bcrypt.compare('test123', foundUser.password);
  const isInvalidPassword = await bcrypt.compare(
    'wrongpassword',
    foundUser.password,
  );

  console.log('✅ Correct password validation:', isValidPassword);
  console.log('✅ Wrong password validation:', !isInvalidPassword);

  if (isValidPassword) {
    console.log('🎉 Login flow would succeed!');
  } else {
    console.log('❌ Login flow would fail!');
  }

  await dataSource.destroy();
}

testFullFlow().catch(console.error);
