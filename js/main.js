function setupSW() {
  if ( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/sw.js')
    .then(function( reg ) {
      console.log('Registration succeeded. Scope is: ' + reg.scope);
    })
    .catch(function( err ) {
      console.log('Registration failed with: ' + err);
    });
  }
}

var srConfig = {
  reset: true,
};

(function(sr) {
  'use strict';

  setupSW();

  sr.reveal([
    '.home__post',
    '.home__page__prev',
    '.home__page__next',
    '.related__post'
  ]);

})( new ScrollReveal( srConfig ) );
