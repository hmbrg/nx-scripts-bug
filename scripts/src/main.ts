// import { seed } from './seed';

// eslint-disable-next-line @typescript-eslint/no-var-requires

const args = process.argv.slice(2);

console.log(process.env);

// (async () => {
//   // print to console after 5 seconds
// })();

setInterval(() => {
  console.log('Seeding...');
}, 1000);
// (async () => {
//   // interval to keep process alive
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   // setInterval(() => {}, 1000);

//   switch (args[0]) {
//     case 'seed':
//       seed();
//   }

//   // process.exit(0);
// })();
