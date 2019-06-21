class Carousel {
  constructor(elementIn) {
    this.element = elementIn;
    this.currentIndex = 0;
    this.slides = Array.from(this.element.querySelectorAll('img')).map(
      slide => new Slide(slide)
    );
    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton.addEventListener('click', () => this.prevSlide());
    this.rightButton.addEventListener('click', () => this.nextSlide());
  }

  nextSlide() {
    this.slides[this.currentIndex].deselect();
    this.currentIndex >= this.slides.length - 1
      ? (this.currentIndex = 0)
      : this.currentIndex++;
    this.slides[this.currentIndex].select();
  }

  prevSlide() {
    this.slides[this.currentIndex].deselect();
    this.currentIndex <= 0
      ? (this.currentIndex = this.slides.length - 1)
      : this.currentIndex--;
    this.slides[this.currentIndex].select();
  }
}

class Slide {
  constructor(elementIn) {
    this.element = elementIn;
  }

  select() {
    this.element.classList.add('current-slide');
  }

  deselect() {
    this.element.classList.remove('current-slide');
  }
}

new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
