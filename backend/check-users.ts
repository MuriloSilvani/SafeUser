import { DataSource } from 'typeorm';
import { User } from './src/user/user.entity';
import * as bcrypt from 'bcrypt';

async function checkExistingUsers() {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [User],
    synchronize: false, // Don't modify schema
  });

  await dataSource.initialize();
  const userRepo = dataSource.getRepository(User);

  console.log('=== Checking Existing Users ===');

  const users = await userRepo.find();
  console.log(`Found ${users.length} users in database`);

  for (const user of users) {
    console.log(`User ID: ${user.id}`);
    console.log(`Email: ${user.email}`);
    console.log(`Name: ${user.name}`);
    console.log(`Has password hash: ${!!user.password}`);
    console.log(`CPF: ${user.cpf ? 'Present' : 'Not set'}`);
    console.log(`Phone: ${user.phone ? 'Present' : 'Not set'}`);
    console.log('---');
  }

  await dataSource.destroy();
}

checkExistingUsers().catch(console.error);