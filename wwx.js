/**
 * wwx.js
 *
 * Injection script for loading the stylesheet for the Tile Visu (version 8.x).
 *
 * https://github.com/wilkware/WwxTileVisu
 *
 * @package       WwxTileView - (W)ilk(w)are E(x)tension for Tile Visu
 * @author        Heiko Wilknitz <heiko@wilkware.de>
 * @copyright     2025 Heiko Wilknitz
 * @link          https://wilkware.de
 * @license       https://creativecommons.org/licenses/by-nc-sa/4.0/ CC BY-NC-SA 4.0
 *
**/

const root = document.documentElement ;

// Debugging:
// Add `<p id="source"></p>` in yout HTML
// Uncomment next 2 lines here 
// console.log(root.getAttribute('xmlns'));
// document.getElementById('source').innerText = root.outerHTML;

if (!root.getAttribute('xmlns')) {
    // viewport meta tag (provided by IPS)
    //    var meta=document.createElement('meta');
    //    meta.name = "viewport";
    //    meta.content = "width=device-width, initial-scale=1";
    //    document.head.appendChild(meta);
    // stylesheet
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "./tile/wwx.css";
    document.head.appendChild(link);
}
