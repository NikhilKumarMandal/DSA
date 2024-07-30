
let n = 5
// for (let i = n; i >= 1 ; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(' * ');
//     }
//     console.log('');
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log(' ');
// }

// for (let i = 0; i <= n; i++) {
    
//     for (let j = 1; j <= n-i; j++) {
//         process.stdout.write(" ");
//     }

//     for (let j = 0; j <= i; j++) {
        
//         process.stdout.write("* ");
//     }
//     console.log(' ');
// }


// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1 - 1; j++) process.stdout.write("  ");
//     for (let j = 0; j <= n; j++)  process.stdout.write(" *");
//     console.log(' ');
// }

// for (let i = 1; i < n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ');
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write('*');
//     }
//     console.log('');
// }

// for (let i = n - 2; i >= 1; i--) {
//       for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ');
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write('*');
//     }
//     console.log('');
// }

// for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(' ');
//     }
   
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write('* ');
//     }
//     console.log('');
// }

for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) process.stdout.write(' ');
    for (let j = 1; j <= 2 * i - 1; j++) process.stdout.write('* ');
    console.log('');
}