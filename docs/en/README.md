# 🪄 WwxTileVisu - (W)ilk(w)are E(x)tended Tile Visu

[![Symcon](https://img.shields.io/badge/Symcon-TileVisu--Skin-red.svg?style=flat-square)](https://www.symcon.de/service/dokumentation/entwicklerbereich/sdk-tools/sdk-skins/)
[![Product](https://img.shields.io/badge/Symcon%20Version-8.1-blue.svg?style=flat-square)](https://www.symcon.de/produkt/)
[![Version](https://img.shields.io/badge/Skin%20Version-1.3.20250829-orange.svg?style=flat-square)](https://github.com/Wilkware/WwxTileVisu)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Extension to use the same HTML in the WebFront and in the tile visualization (TileVisu) together with the WwxSkin.

## 📃 Table of contents

1. [Features](#user-content-1-features)
2. [Requirements](#user-content-2-requirements)
3. [Installation](#user-content-3-installation)
4. [Changelog](#user-content-4-changelog)

### 1. Features

Since the TileVisu does not support skins yet, a detour via JavaScript is required.  
This JavaScript checks whether the HTML is displayed in the WebFront. If not, a stylesheet is injected into the head.  
This stylesheet supports the same CSS classes as the WwxSkin, so the same HTML can be used in both visualizations for the time being.

### 2. Requirements

* Symcon version 8.1 or higher

### 3. Installation

1. Check out the repository `https://github.com/Wilkware/WwxTileVisu`.
2. Copy the files `wwx.css` and `wwx.js` into the Symcon tile directory (`/usr/share/symcon/tile/`).
3. Insert the following line before your existing HTML code ...  
    `<script type="application/javascript" src="./tile/wwx.js"></script>`  
    ... or, if you use my [Pitti's script library](https://community.symcon.de/t/pittis-skript-bibliothek/131876):  
    `$html = __TILE_VISU_SCRIPT; // write as first line of the HTML definition`

> [!NOTE]
> The directory `/usr/share/symcon/` belongs to the Symcon installation. After a Symcon update, check whether the files are still present.

A detailed description of the technique and background can be found on my [blog](https://wilkware.de) on the page [WwxTileVisu](https://wilkware.de/ip-symcon-skins/wwx-tile-visu/) (German).

### 4. Changelog

v1.3.20250829

* _FIX_: Small adjustment to the table header of `lines`
* _FIX_: Documentation updated

v1.2.20250721

* _FIX_: CSS is now loaded via `/tile`
* _FIX_: Scrollbar thumb set to transparent by default
* _FIX_: Documentation adjusted

v1.1.20241221

* _NEW_: Table style `theme` (head), table header color matches the theme color
* _NEW_: Sticky table header
* _FIX_: Table style `lines` (head) now works correctly when scrolling
* _FIX_: Meta tag is now delivered/provided by Symcon

v1.0.20240702

* _NEW_: Initial version

## 👨‍💻 Developer

For more than 10 years now, I have been fascinated by the topic of home automation. In recent years, I have also been intensively involved in the Symcon community and contribute various scripts and modules there. You can find me there under the name @pitti ;-)

[![GitHub](https://img.shields.io/badge/GitHub-@wilkware-181717.svg?style=for-the-badge&logo=github)](https://wilkware.github.io/)

## 💰 Donations

The software is free for non-commercial use, I would appreciate a donation if you like the skin.

[![PayPal](https://img.shields.io/badge/PayPal-donate-00457C.svg?style=for-the-badge&logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8816166)

## ©️ License

Attribution - NonCommercial - ShareAlike 4.0 International

[![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-EF9421.svg?style=for-the-badge&logo=creativecommons)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
