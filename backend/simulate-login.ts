import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import * as bcrypt from 'bcrypt';

async function simulateFrontendFlow() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: true,
  });

  await dataSource.initialize();
  const userRepo = dataSource.getRepository(User);

  console.log('=== Simulating Frontend Registration + Login ===');

  // Simulate user registration
  const testEmail = 'user@test.com';
  const testPassword = 'password123';

  console.log('1. Checking if user already exists...');
  const existingUser = await userRepo.findOne({ where: { email: testEmail } });
  if (existingUser) {
    console.log('User already exists, removing for clean test...');
    await userRepo.remove(existingUser);
  }

  console.log('2. Creating new user...');
  const hashedPassword = await bcrypt.hash(testPassword, 10);
  const newUser = new User();
  newUser.name = 'Frontend Test User';
  newUser.email = testEmail;
  newUser.password = hashedPassword;

  const savedUser = await userRepo.save(newUser);
  console.log('✅ User created successfully');
  console.log('User ID:', savedUser.id);
  console.log('User Email:', savedUser.email);

  // Simulate login attempt
  console.log('3. Simulating login attempt...');
  const loginUser = await userRepo.findOne({ where: { email: testEmail } });
  if (!loginUser) {
    console.log('❌ User not found during login');
    return;
  }

  console.log('✅ User found for login');
  const isPasswordValid = await bcrypt.compare(
    testPassword,
    loginUser.password,
  );
  console.log('Password validation result:', isPasswordValid);

  if (isPasswordValid) {
    console.log('🎉 Login would succeed!');
    console.log('User data that would be returned:', {
      id: loginUser.id,
      email: loginUser.email,
      name: loginUser.name,
    });
  } else {
    console.log('❌ Login would fail - password mismatch');
  }

  await dataSource.destroy();
}

simulateFrontendFlow().catch(console.error);
