 const gameModal = document.getElementById('gameModal');
        const fsIframe = document.getElementById('fullscreen-iframe');
        const gameUrl = "p5/index.html"; 


        gameModal.addEventListener('show.bs.modal', function () {
            fsIframe.src = gameUrl;
        });


        gameModal.addEventListener('hidden.bs.modal', function () {
            fsIframe.src = "";
        });
