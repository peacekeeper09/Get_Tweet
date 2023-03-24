function generateEmbedCode() {
	const tweetUrl = document.getElementById('tweet-url').value;
	const tweetId = getTweetId(tweetUrl);
	if (tweetId) {
	  const embedCode = `
		<blockquote class="twitter-tweet">
		  <a href="${tweetUrl}"></a>
		</blockquote>
	  `;
	  document.getElementsByClassName('output')[0].innerHTML = embedCode;

	  twttr.widgets.load();
	}
  }
  
  function getTweetId(url) {
	const regex = /\/status\/(\d+)/;
	const match = url.match(regex);
	if (match) {
	  return match[1];
	} else {
	  alert('Invalid tweet URL');
	  return false;
	}
  }
  