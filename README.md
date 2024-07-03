# WwxTileVisu

[![Version](https://img.shields.io/badge/Symcon-TileVisu--Skin-red.svg?style=flat-square)](https://www.symcon.de/service/dokumentation/entwicklerbereich/sdk-tools/sdk-skins/)
[![Product](https://img.shields.io/badge/Symcon%20Version-7.x-blue.svg?style=flat-square)](https://www.symcon.de/produkt/)
[![Version](https://img.shields.io/badge/Skin%20Version-1.0.20240702-orange.svg?style=flat-square)](https://github.com/Wilkware/WwxTileVisu)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Extension um das gleiche HTML im WebFront und Tile Visualisation zusammen mit dem WwxSkin zu nutzen.

## Inhaltverzeichnis

1. [Funktionsumfang](#user-content-1-funktionsumfang)
2. [Voraussetzungen](#user-content-2-voraussetzungen)
3. [Installation](#user-content-3-installation)
4. [Versionshistorie](#user-content-8-versionshistorie)

### 1. Funktionsumfang

Da die Tile Visu derzeit noch keine Skins unterstützt, ist ein Umweg über ein JavaScript erforderlich.  
Dieses JavaScript prüft, ob das HTML im WebFront angezeigt wird. Wenn nicht, wird ein Stylesheet in den Head injiziert.  
Dieses Stylesheet unterstützt die gleichen CSS-Klassen wie der WwxSkin, sodass das gleiche HTML übergangsweise in beiden Visualisierungen genutzt werden kann.

### 2. Voraussetzungen

* IP-Symcon ab Version 7.1

### 3. Installation

1. Repository `https://github.com/Wilkware/WwxTileVisu` auschecken.
2. Dateien `wwx.css` und `wwx.js` in das Preview-Verzeichnis von IPS legen (/usr/share/smcon/preview).
3. Folgende Zeile vor dem bestehenden HTML-Code einfügen: `<script type="application/javascript" src="./preview/wwx.js"></script>`.


### 4. Versionshistorie

v1.0.20240702

* _NEU_: Initialversion

## Entwickler

Seit nunmehr über 10 Jahren fasziniert mich das Thema Haussteuerung. In den letzten Jahren betätige ich mich auch intensiv in der IP-Symcon Community und steuere dort verschiedenste Skript und Module bei. Ihr findet mich dort unter dem Namen @pitti ;-)

[![GitHub](https://img.shields.io/badge/GitHub-@wilkware-181717.svg?style=for-the-badge&logo=github)](https://wilkware.github.io/)

## Spenden

Die Software ist für die nicht kommerzielle Nutzung kostenlos, über eine Spende bei Gefallen des Moduls würde ich mich freuen.

[![PayPal](https://img.shields.io/badge/PayPal-spenden-00457C.svg?style=for-the-badge&logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8816166)

## Lizenz

Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International

[![Licence](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-EF9421.svg?style=for-the-badge&logo=creativecommons)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
