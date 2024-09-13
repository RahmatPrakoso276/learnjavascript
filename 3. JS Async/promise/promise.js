//callback promise 'WRONG'

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});
let count = 0;
// Promise  right version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error: Connection Timeout");
      } else {
        count += 1;
        console.log(`No.${count}`);
        resolve(`No.${count} Success: ${url} with delay : (${delay}ms)`);
      }
    }, delay);
  });
};

requestPromise("movie.com")
  .then((result) => {
    console.log("page 1");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("page 2");
    console.log(result);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log("page 3");
    console.log(result);
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.log(err);
  });
