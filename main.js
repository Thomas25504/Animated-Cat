const sprite = document.querySelector(".sprite");
    const frameWidth = 32;    
    const frameHeight = 32;   
    const totalFrames = 4;    
    const scale = 20;         

    let currentFrame = 0;

    function animateSprite() {
      const offsetX = -currentFrame * frameWidth * scale;
      sprite.style.backgroundPosition = `${offsetX}px 0px`;
      currentFrame = (currentFrame + 1) % totalFrames;
    }

    setInterval(animateSprite, 200);