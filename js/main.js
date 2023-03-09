//厳格モードON（エラーとか厳しめにチェックしてくれる）
'use strict'

{
	const main = document.getElementById('main');
	const thumbnails = document.querySelectorAll('.thumb-img');

	//'.thumb-img'の要素全てをforEachでまわす。これでできるのが何か腑に落ちない。。。
	thumbnails.forEach(element => {
		element.addEventListener('click', () => {
			//srcは画像のファイル名ってことね。
			let src = element.getAttribute('src');
			main.src = src;
		})
	});
}