document.addEventListener('DOMContentLoaded', init);

function init(ev) {
  //ev is the event object
  //ev.target, ev.currentTarget, ev.type, ev.preventDefault()
}

/*****
 * let useCapture = false; //default value
 *
 * let opts = {
 *  capture: false,  //use bubbling or capture
 *  once: true,      //remove listener after called once
 *  passive: true    //function not allowed to call preventDefault
 * }
 *
 * element.addEventListener('click', func, useCapture)
 * element.addEventListener('click', func, opts)
 * element.removeEventListener('click', func, useCapture)
 *
 * MOUSE EVENTS
 * click
 * dblclick
 * mousedown
 * mouseup
 * mouseover
 * mouseout
 * mouseenter
 * mouseleave
 * contextmenu
 *
 * KEYBOARD
 * keyup
 * keydown
 * keypress
 *
 * PAGE
 * DOMContentLoaded
 * beforeunload
 *
 * PAGE, IMG, SCRIPT, STYLE, FILES
 * load
 *
 *
 */
