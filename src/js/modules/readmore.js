const readmore = document.querySelector( "[data-toggle='readmore-disable']" );
const aboutDisable = document.querySelector( "[data-toggle='about-disable']" );
const buttons = document.querySelectorAll( "[data-attribute='readmore-button']" );
const readmoreBlock = document.querySelector( "[data-toggle='readmore-block-active'" );


for( let i = 0; i < buttons.length; i++ ) {
  AllButtons = buttons[i];

  AllButtons.onclick = ()=> {
    readmore.classList.toggle('readmore-disable');
    readmoreBlock.classList.toggle('readmore-block-active');
    aboutDisable.classList.toggle('about-disable');
    aboutDisable.scroll(0,0);
  }
  console.log(AllButtons)
}
