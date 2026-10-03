# Scout

Marketing site for Scout, the job search agent. Career profile by DR CV.

Open `index.html` in a browser. No build step.

* WebGL fluted glass hero that reacts to the pointer (raw WebGL, no library)
* CSS light-beam panels for the evenings section and the final call to action
* GSAP 3 and ScrollTrigger for the load sequence, scroll scenes and the product preview
* Faculty Glyphic for headings (48px max), Inter for body text (16px max)

## Brand colours

The four brand colours live at the top of the `<style>` block as `--peacock`, `--neon`, `--cream` and `--sand`. The WebGL shader reads the same tokens, so changing them there updates the whole page.

## Private beta

Set `PRIVATE_BETA = true` at the top of the script to change every primary call to action to "Request beta access".
