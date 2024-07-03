/**
 * wwx.js
 *
 * Injection script for loading the stylesheet for the Tile Visu (version 7.x).
 * 
 * https://github.com/wilkware/WwxTileVisu
 *
 * @package       WwxTileView - (W)ilk(w)are E(x)tension for Tile Visu
 * @author        Heiko Wilknitz <heiko@wilkware.de>
 * @copyright     2024 Heiko Wilknitz
 * @link          https://wilkware.de
 * @license       https://creativecommons.org/licenses/by-nc-sa/4.0/ CC BY-NC-SA 4.0
 *
 * Debugging:
 *  Add `<p id="Source"</p>` in yout HTML
 *  Uncomment next 2 lines here after the `var html ...` statement
 *  // console.log(html[0].getAttribute('xmlns'));
 *  // document.getElementById('source').innerText = html[0].outerHTML;
 *
*/

var html = document.getElementsByTagName('html');

if (!html[0].getAttribute('xmlns')) {
    // viewport
    var meta=document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(meta);
    // stylesheet
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "./preview/wwx.css";
    document.head.appendChild(link);
}