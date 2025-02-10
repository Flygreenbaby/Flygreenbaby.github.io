    const panels = document.querySelectorAll('.carvideo-background');

    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        const video = panel.querySelector('video');
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });

    function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active');
        const video = panel.querySelector('video');
        video.pause();
      });
    }