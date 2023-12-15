function setBackgroundImage() {
      var backgroundImageUrl;

      if (window.innerWidth > window.innerHeight) {
        // Landscape mode
        backgroundImageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
      } else {
        // Portrait mode
        backgroundImageUrl = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
      }

      document.body.style.backgroundImage = 'url("' + backgroundImageUrl + '")';
    }

    // Initial call to set the background image based on the initial screen orientation
    setBackgroundImage();

    // Listen for changes in screen orientation and update the background image accordingly
    window.addEventListener('resize', setBackgroundImage);