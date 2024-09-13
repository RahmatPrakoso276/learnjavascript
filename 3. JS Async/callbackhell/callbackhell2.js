// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};


// callback function
requestCallback(
	'movie.com',
	function (response) {
		console.log('success', response);
		requestCallback(
			'movie.com',
			function (response) {
				console.log('success', response);
				requestCallback(
					'movie.com',
					function (response) {
						console.log('success', response);
						requestCallback(
							'movie.com',
							function (response) {
								console.log('success', response);
								requestCallback(
									'movie.com',
									function (response) {
										console.log('success', response);
									},
									function (error) {
										console.log('error', error);
									}
								);
							},
							function (error) {
								console.log('error', error);
							}
						);
					},
					function (error) {
						console.log('error', error);
					}
				);
			},
			function (error) {
				console.log('error', error);
			}
		);
	},
	function (error) {
		console.log('error', error);
	}
);
