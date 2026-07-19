# Website-Grafiken

Feature-Grafiken im Stil „weiße UI-Karten auf geblurrtem Foto-Hintergrund"
(Referenz: hallotheo.de), angepasst auf Versicherungs-Content und das
VERDA-Design-System. **Noch nicht auf der Website eingebunden.**

## Varianten

| Datei | Motiv | Hintergrund |
|---|---|---|
| `grafik-1-dokumente.html` | Dokumente digital (Vollmacht, Schadenmeldung …) | Gold/Herbstlaub |
| `grafik-2-kennzahlen.html` | Kennzahlen & Chart (Anfragen vs. Abschlüsse) | Waldgrün |
| `grafik-3-ki-posteingang.html` | KI-Assistent beantwortet Anfrage nach Feierabend | Warmes Braun/Gold |

Alle Zahlen und Chat-Inhalte sind **Platzhalter/Beispieldaten** (wie die TODOs in `site.js`).

## Export (PNG, 2400×2700, transparente Ecken)

Fertige PNGs liegen in `export/`. Neu exportieren nach Änderungen:

```bash
cd grafiken
for f in grafik-1-dokumente grafik-2-kennzahlen grafik-3-ki-posteingang; do
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
    --hide-scrollbars --force-device-scale-factor=2 --window-size=1200,1350 \
    --default-background-color=00000000 --virtual-time-budget=12000 \
    --screenshot="export/$f.png" "file://$PWD/$f.html"
done
```

## Hintergrundfotos

`assets/bg-*.jpg` stammen von Lorem Picsum (picsum.photos, Unsplash-Fotos,
frei nutzbar): `bg-gold` = id/167, `bg-forest` = id/1039, `bg-warm` = id/431.
Der Blur wird per CSS (`filter: blur(…)`) in den HTML-Dateien erzeugt und ist
dort pro Variante justierbar.
