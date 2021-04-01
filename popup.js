  const bottle2 = document.querySelector('#bottle-2');
            const bottle1 = document.querySelector('#bottle-1');
            const popup = document.querySelector('#popupWrapper');
            const close = document.querySelector('#popupClose');

            bottle2.addEventListener('click', () => {
                popup.style.display = "block";
            });

            bottle1.addEventListener('click', () => {
                popup.style.display = "block";
            });

            close.addEventListener('click', () => {
                popup.style.display = "none"
            })

            popup.addEventListener('click', (e) => {
                popup.style.display = "none";
            });