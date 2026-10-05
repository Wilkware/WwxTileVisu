# 🪄 WwxTileVisu - (W)ilk(w)are E(x)tended Tile Visu

[![Symcon](https://img.shields.io/badge/Symcon-TileVisu--Skin-red.svg?style=flat-square)](https://www.symcon.de/service/dokumentation/entwicklerbereich/sdk-tools/sdk-skins/)
[![Product](https://img.shields.io/badge/Symcon%20Version-8.1-blue.svg?style=flat-square)](https://www.symcon.de/produkt/)
[![Version](https://img.shields.io/badge/Skin%20Version-1.3.20250829-orange.svg?style=flat-square)](https://github.com/Wilkware/WwxTileVisu)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Erweiterung, um das gleiche HTML im WebFront und in der Kachel-Visualisierung (TileVisu) zusammen mit dem WwxSkin zu nutzen.

## 📃 Inhaltsverzeichnis

1. [Funktionsumfang](#user-content-1-funktionsumfang)
2. [Voraussetzungen](#user-content-2-voraussetzungen)
3. [Installation](#user-content-3-installation)
4. [Versionshistorie](#user-content-4-versionshistorie)

### 1. Funktionsumfang

Da die TileVisu derzeit noch keine Skins unterstützt, ist ein Umweg über ein JavaScript erforderlich.  
Dieses JavaScript prüft, ob das HTML im WebFront angezeigt wird. Wenn nicht, wird ein Stylesheet in den Head injiziert.  
Dieses Stylesheet unterstützt die gleichen CSS-Klassen wie der WwxSkin, sodass das gleiche HTML übergangsweise in beiden Visualisierungen genutzt werden kann.

### 2. Voraussetzungen

* Symcon ab Version 8.1

### 3. Installation

1. Repository `https://github.com/Wilkware/WwxTileVisu` auschecken.
2. Dateien `wwx.css` und `wwx.js` in das Tile-Verzeichnis von Symcon legen (`/usr/share/symcon/tile/`).
3. Folgende Zeile vor dem bestehenden HTML-Code einfügen ...  
    `<script type="application/javascript" src="./tile/wwx.js"></script>`  
    ... oder, für Nutzer meiner [Pittis Skript-Bibliothek](https://community.symcon.de/t/pittis-skript-bibliothek/131876):  
    `$html = __TILE_VISU_SCRIPT; // als erste Zeile der HTML-Definition schreiben`

> [!NOTE]
> Das Verzeichnis `/usr/share/symcon/` gehört zur Symcon-Installation. Nach einem Symcon-Update sollte geprüft werden, ob die Dateien noch vorhanden sind.

Eine ausführliche Beschreibung der Technik und Zusammenhänge kann auf meinem [Blog](https://wilkware.de) auf der Seite [WwxTileVisu](https://wilkware.de/ip-symcon-skins/wwx-tile-visu/) nachgelesen werden.

### 4. Versionshistorie

v1.3.20250829

* _FIX_: Kleine Anpassung beim Tabellenkopf von `lines`
* _FIX_: Dokumentation aktualisiert

v1.2.20250721

* _FIX_: CSS wird jetzt über `/tile` geladen
* _FIX_: Scrollbar-Thumb standardmäßig auf transparent gesetzt
* _FIX_: Dokumentation angepasst

v1.1.20241221

* _NEW_: Tabellenstyle `theme` (head), Tabellenkopffarbe wie Theme-Farbe
* _NEW_: Sticky (stehender) Tabellenkopf
* _FIX_: Tabellenstyle `lines` (head) funktioniert beim Scrollen korrekt
* _FIX_: Meta-Tag wird jetzt von Symcon ausgeliefert bzw. bereitgestellt

v1.0.20240702

* _NEW_: Initialversion

## 👨‍💻 Entwickler

Seit nunmehr über 10 Jahren fasziniert mich das Thema Haussteuerung. In den letzten Jahren betätige ich mich auch intensiv in der Symcon Community und steuere dort verschiedenste Skripte und Module bei. Ihr findet mich dort unter dem Namen @pitti ;-)

[![GitHub](https://img.shields.io/badge/GitHub-@wilkware-181717.svg?style=for-the-badge&logo=github)](https://wilkware.github.io/)

## 💰 Spenden

Die Software ist für die nicht-kommerzielle Nutzung kostenlos, über eine Spende bei Gefallen des Skins würde ich mich freuen.

[![PayPal](https://img.shields.io/badge/PayPal-spenden-00457C.svg?style=for-the-badge&logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8816166)

## ©️ Lizenz

Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International

[![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-EF9421.svg?style=for-the-badge&logo=creativecommons)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
