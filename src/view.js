/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-collapse block)' );
/* eslint-enable no-console */


const clbSetCollapsibleHeights = function() {

    const innerCollapsibles = document.querySelectorAll('.clb-simple-collapsible-content-inner');
    //console.log(innerCollapsibles);

    for (let innerCollapsible of innerCollapsibles) {
        // console.log(innerCollapsible.offsetHeight);
        // console.log(innerCollapsible.parentNode);
        innerCollapsible.parentNode.style.setProperty('--clb-simple-collapsible-content-height', innerCollapsible.offsetHeight + "px");
    }

}
clbSetCollapsibleHeights();