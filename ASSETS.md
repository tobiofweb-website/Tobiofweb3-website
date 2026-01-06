Image placement and naming guide

Folders:
- assets/images/home — hero and home visuals
- assets/images/proof — proof of work, portfolio images
- assets/images/testimonials — client portraits for testimonials

Recommended filenames:
- home-hero.webp (1920x800)
- proof-01.webp, proof-02.webp, proof-03.webp (1200px wide for full view; also keep thumbnails at 400–800px)
- testi-01.webp, testi-02.webp (square 400x400 or 400x533)

Formats and sizes:
- Prefer WebP for smallest size and quality. Use JPG as fallback.
- Hero: 100–300 KB, max 1920x800.
- Proof images: 1200px wide, 150–500 KB depending on detail.
- Thumbnails: 400–800px, 40–150 KB.
- Testimonials portraits: 64–200 KB.

Optional globe background:
- assets/images/home/globe.png — transparent PNG of a globe (ideally 1200×1200) to enable the rotating globe background. If you don't add this file, the site will fall back to the animated gradient + starfield background.

Accessibility:
- Include descriptive `alt` text for each image.

How to reference in HTML:
- Home hero: <img src="assets/images/home/home-hero.webp" alt="Brief description">
- Proof gallery: <img src="assets/images/proof/proof-01.webp" alt="Project name or description">
- Testimonial portrait: <img src="assets/images/testimonials/testi-01.webp" alt="Client Name">

Drop your files into the appropriate folders and the site will reference them as shown above.