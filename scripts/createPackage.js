import fs from 'fs';
import path from 'path';

const packageJsonContent = {
  name: 'rdm-my-lib',
  version: '1.0.0',
  description: 'rdm-my-lib',
  type: 'module',
  main: 'index.js', // Entry point for your library
  types: 'types/index.d.ts', // Type definitions entry
  private: false, // Set to false to publish
};

const packageJsonPath = path.join(process.cwd(), 'dist', 'package.json');

fs.writeFile(
  packageJsonPath,
  JSON.stringify(packageJsonContent, null, 2),
  err => {
    if (err) {
      console.error('Error creating package.json:', err);
    } else {
      console.log('package.json created successfully in dist.');
    }
  },
);
