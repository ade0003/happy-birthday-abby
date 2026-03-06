document.addEventListener("DOMContentLoaded", () => {
  const collageContainer = document.getElementById("collage-container");
  const audio1 = document.getElementById("video1");
  const audio2 = document.getElementById("video2");
  const audio3 = document.getElementById("video3");

  // Array of image filenames (renamed)
  const baseImages = [
    "1.jpg",
    "4.jpg",
    "Screenshot 2026-03-05 at 6.55.27 PM.png",
    "Screenshot 2026-03-05 at 6.56.19 PM.png",
    "Screenshot 2026-03-05 at 6.58.41 PM.png",
    "Screenshot 2026-03-05 at 6.58.49 PM.png",
  ];

  // Fill the screen with more images (duplicates for chaos)
  const images = [];
  const numImages = 64; // More images for chaos
  for (let i = 0; i < numImages; i++) {
    images.push(baseImages[Math.floor(Math.random() * baseImages.length)]);
  }

  // Array of animation classes
  const animations = [
    "animate-float",
    "animate-spin",
    "animate-bounce",
    "animate-pulse",
    "animate-wiggle",
    "animate-wander",
  ];

  // Staggered image appearance
  function showImagesStaggered() {
    images.forEach((imageSrc, index) => {
      setTimeout(
        () => {
          const img = document.createElement("img");
          img.src = imageSrc;
          img.className = "collage-image";
          img.style.opacity = 0;
          img.style.transition = "opacity 0.5s, transform 0.1s";

          // Random size
          const minSize = 120;
          const maxSize = 340;
          const size = Math.random() * (maxSize - minSize) + minSize;
          img.style.width = `${size}px`;
          img.style.height = "auto";

          // Random position (cover the whole screen)
          const x = Math.random() * (window.innerWidth - size);
          const y = Math.random() * (window.innerHeight - size);

          // Random animation
          const randomAnimation =
            animations[Math.floor(Math.random() * animations.length)];
          img.classList.add(randomAnimation);

          // Random rotation
          const rotation = Math.random() * 360;
          img.style.transform = `rotate(${rotation}deg)`;

          // Random z-index for more chaos
          img.style.zIndex = Math.floor(Math.random() * 50) + 2;

          img.style.left = `${x}px`;
          img.style.top = `${y}px`;

          collageContainer.appendChild(img);
          // Fade in
          setTimeout(() => {
            img.style.opacity = 1;
          }, 50);
        },
        Math.random() * 1200 + index * 80,
      ); // Staggered, with some randomness
    });
  }

  // --- AUDIO AUTOPLAY CHAOS ---
  function tryAutoplay() {
    // Autoplay is blocked by browsers, so just show overlay
    showPlayOverlay();
  }

  function showPlayOverlay() {
    if (document.getElementById("play-overlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "play-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "white";
    overlay.style.zIndex = 9999;
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.cursor = "pointer";
    overlay.innerHTML =
      '<button style="padding: 10px 20px; font-size: 1.5vw; background-color: #ff0000; color: white; border: none; border-radius: 5px;">Start Party</button>';
    overlay.onclick = () => {
      overlay.remove();
      audio1.play().catch(() => {});
      audio2.play().catch(() => {});
      audio3.play().catch(() => {});
      // Request full screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE11
        document.documentElement.msRequestFullscreen();
      }
      // Start showing images after clicking
      showImagesStaggered();
    };
    document.body.appendChild(overlay);
  }

  // Alternate audio playback forever
  function setupAudioAlternation() {
    audio1.onended = () => {
      audio1.currentTime = 0;
      audio1.play().catch(() => {});
    };
    audio2.onended = () => {
      audio2.currentTime = 0;
      audio2.play().catch(() => {});
    };
    audio3.onended = () => {
      audio3.currentTime = 0;
      audio3.play().catch(() => {});
    };
  }

  tryAutoplay();
  setupAudioAlternation();

  // Make audio start together when one is paused
  // Removed sync pausing

  // Handle window resize (re-randomize positions)
  window.addEventListener("resize", () => {
    const images = document.querySelectorAll(".collage-image");
    images.forEach((img) => {
      const size = img.offsetWidth;
      const x = Math.random() * (window.innerWidth - size);
      const y = Math.random() * (window.innerHeight - size);
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
    });
  });
});
