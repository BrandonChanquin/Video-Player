//JavaScript para los botones de reproduccion

		const $video = document.querySelector("#video");
		const $play = document.querySelector("#play");
		const $pause = document.querySelector("#pause");
		const $backward = document.querySelector("#backward");
		const $forward = document.querySelector("#forward");

		$play.addEventListener('click', darplay, false);

		$pause.addEventListener('click', darpause, false);

		function darplay(){
			$video.play();
			$play.hidden = true
			$pause.hidden = false
			console.log('Haz presionado el play')
		}

		function darpause(){
			$video.pause();
			$play.hidden = false
			$pause.hidden = true
			console.log('haz presionado pausa')
		}

		$backward.addEventListener('click', retroceder, false);

		function retroceder(){
			$video.currentTime = $video.currentTime - 10
			console.log('haz retrocedido 10 segundos', $video.currentTime)
		}

		$forward.addEventListener('click', avanzar, false);

		function avanzar(){
			$video.currentTime = $video.currentTime + 10
			console.log('haz avanzado 10 segundos', $video.currentTime)
		}


		// JavaScript para la barra del video

		const $progress = document.querySelector('#progress');

		$video.addEventListener('loadedmetadata', handleLoaded);
		$video.addEventListener('timeupdate', handletimeupdate);

		function handleLoaded(){
			$progress.max = $video.duration
			console.log('ha cargado mi video', $video.duration)
		}

		function handletimeupdate(){
			$progress.value = $video.currentTime

		}


		$progress.addEventListener('input', handleinput);

		function handleinput(){
			$video.currentTime = $progress.value

			console.log($progress.value)
		}


