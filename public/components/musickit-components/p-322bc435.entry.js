import{r,h as a,H as e,g as b}from"./p-a23b3d3a.js";import"./p-112455b1.js";import"./p-db605274.js";import{C as o}from"./p-e908516f.js";import"./p-a09dfd89.js";import{v as g}from"./p-161949df.js";const l=class{constructor(a){r(this,a),this.theme=o.light}handleThemeChange(r){g(r,this.el)}componentWillLoad(){this.handleThemeChange(this.theme)}render(){return a(e,{theme:this.theme},a("amp-chrome-volume",null))}get el(){return b(this)}static get watchers(){return{theme:["handleThemeChange"]}}};l.style=":host{--white:white;--black:black;--systemGray:#98989d;--systemSecondary:rgba(0, 0, 0, 0.5);--primaryColor:#007aff;--primaryColorRollover:#0045b7;--primaryColorPressed:#005cd7;--primaryColorDeepPressed:#0045b7;--primaryColorDisabled:rgba(0, 122, 255, 0.35);--labelPrimary:rgba(0, 0, 0, 0.95);--labelPrimaryInverted:rgba(255, 255, 255, 0.9);--labelSecondary:rgba(60, 60, 67, 0.6);--labelTertiary:rgba(60, 60, 67, 0.3);--labelQuaternary:rgba(60, 60, 67, 0.18);--labelDivider:rgba(0, 0, 0, 0.15);--vibrantPrimary:rgba(0, 0, 0, 0.95);--vibrantSecondary:rgba(60, 60, 67, 0.5);--vibrantTertiary:rgba(60, 60, 67, 0.3);--vibrantQuaternary:rgba(60, 60, 67, 0.18);--vibrantDivider:rgba(0, 0, 0, 0.29);--pageBg:#f8f8fa;--shelfBg:#f2f2f7;--overlayBg:rgba(248, 248, 250, 0.9);--overlayBgBlur:rgba(248, 248, 250, 0.7);--borderRule:rgba(0, 0, 0, 0.07);--podcastKeyPrimary:#7224d8;--podcastKeySecondary:rgba(114, 36, 216, 0.6);--podcastKeyTertiary:rgba(114, 36, 216, 0.25);--podcastKeyQuaternary:rgba(114, 36, 216, 0.06);--podcastPlatterBg:#f8f8fa;--podcastPlatterBgTransparent:rgba(248, 248, 250, 0);--podcastScrim:rgba(0, 0, 0, 0.5);--progressElapsed:#a5aab2;--progressRemaining:#e1e1e6;--menuItemHoverBg:rgba(0, 0, 0, 0.05);--tracklistGradientStart:rgba(0, 0, 0, 0.05);--tracklistGradientEnd:rgba(0, 0, 0, 0);--footerPlayerBg:#fff;--emptyPlatterBg:rgba(60, 60, 67, 0.18);--videoEmbedMenuBg:rgba(255, 255, 255, 0.97);--videoEmbedMenuHoverBg:rgba(60, 60, 67, 0.03);--musicKeyColor:#f0233b;--musicKeyColorOutline:rgba(240, 35, 59, 0.6);--videoEmbedSubheadline:rgba(255, 255, 255, 0.4);--videoEmbedLabel:rgba(255, 255, 255, 0.8);--lyricsBg:rgba(255, 255, 255, 0.8);--chromeVolumeTrack:rgba(0, 0, 0, 0.15);--chromeVolumeElapsed:rgba(0, 0, 0, 0.5);--chromeVolumeThumb:white;--chromeVolumeThumbShadow:rgba(0, 0, 0, 0.1);--chromeVolumeThumbShadowInset:rgba(0, 0, 0, 0.5);--chromeVolumeIcon:rgba(0, 0, 0, 0.4);--chromebg:rgba(255, 255, 255, 0.88);--playerBGFill:rgba(255, 255, 255, 0.88);--playerLCDBGFill:white;--playerScrubberThumb:#656565;--playerScrubberTrack:rgba(0, 0, 0, 0.1);--playerScrubberFill:rgba(0, 0, 0, 0.5);--playerMissingArtworkIcon:#c6c6c6;--playerMissingArtworkBg:#e9e9e9;--chromeBg:rgba(255, 255, 255, 0.88);--chromeBorderColor:rgba(0, 0, 0, 0.2);--chromeVolumeIcons:rgba(0, 0, 0, 0.4);--chromePlatter:rgba(0, 0, 0, 0.25);--ctxmenuBgColor:rgba(255, 255, 255, 0.97);--ctxmenuBgColorHover:rgba(60, 60, 67, 0.03);--ctxmenuScrim:rgba(0, 0, 0, 0.45);--frostedFallbackHover:rgba(142, 142, 147, 0.8)}:host([theme=dark]){--white:white;--black:black;--systemSecondary:rgba(255, 255, 255, 0.5);--primaryColor:#0a84ff;--primaryColorRollover:#47c1ff;--primaryColorPressed:#38b2ff;--primaryColorDeepPressed:#47c1ff;--primaryColorDisabled:rgba(10, 132, 255, 0.5);--labelPrimary:rgba(255, 255, 255, 0.9);--labelPrimaryInverted:rgba(0, 0, 0, 0.95);--labelSecondary:rgba(235, 235, 245, 0.6);--labelTertiary:rgba(235, 235, 245, 0.3);--labelQuaternary:rgba(235, 235, 245, 0.18);--labelDivider:rgba(255, 255, 255, 0.1);--vibrantPrimary:rgba(255, 255, 255, 0.9);--vibrantSecondary:rgba(235, 235, 245, 0.6);--vibrantTertiary:rgba(235, 235, 245, 0.3);--vibrantQuaternary:rgba(235, 235, 245, 0.18);--vibrantDivider:rgba(255, 255, 255, 0.19);--pageBg:#404040;--shelfBg:rgba(0, 0, 0, 0.1);--overlayBg:rgba(64, 64, 64, 0.9);--overlayBgBlur:rgba(64, 64, 64, 0.7);--borderRule:rgba(255, 255, 255, 0.1);--podcastKeyPrimary:#9c5af2;--podcastKeySecondary:rgba(156, 90, 242, 0.6);--podcastKeyTertiary:rgba(156, 90, 242, 0.25);--podcastKeyQuaternary:rgba(156, 90, 242, 0.1);--podcastPlatterBg:#1c1c1e;--podcastPlatterBgTransparent:rgba(28, 28, 30, 0);--podcastScrim:rgba(255, 255, 255, 0.5);--progressElapsed:rgba(255, 255, 255, 0.9);--progressRemaining:rgba(235, 235, 245, 0.3);--menuItemHoverBg:rgba(255, 255, 255, 0.05);--tracklistGradientStart:rgba(255, 255, 255, 0.1);--tracklistGradientEnd:rgba(255, 255, 255, 0);--tracklistGradientWidth:170px;--footerPlayerBg:#2e2e2e;--emptyPlatterBg:#6e6e6e;--videoEmbedMenuBg:rgba(0, 0, 0, 0.97);--videoEmbedMenuHoverBg:rgba(60, 60, 67, 0.18);--musicKeyColor:#d6003b;--musicKeyColorOutline:rgba(214, 0, 59, 0.6);--videoEmbedSubheadline:rgba(255, 255, 255, 0.4);--videoEmbedLabel:rgba(255, 255, 255, 0.8);--lyricsBg:rgba(45, 45, 45, 0.8);--chromeVolumeTrack:rgba(255, 255, 255, 0.15);--chromeVolumeElapsed:rgba(255, 255, 255, 0.6);--chromeVolumeThumb:#cacaca;--chromeVolumeThumbShadow:rgba(0, 0, 0, 0.1);--chromeVolumeThumbShadowInset:rgba(0, 0, 0, 0.5);--chromeVolumeIcon:rgba(255, 255, 255, 0.4);--chromebg:rgba(45, 45, 45, 0.88);--playerBGFill:rgba(45, 45, 45, 0.88);--playerLCDBGFill:#4d4d4d;--playerScrubberThumb:#d9d9d9;--playerScrubberTrack:rgba(255, 255, 255, 0.1);--playerScrubberFill:rgba(255, 255, 255, 0.6);--playerMissingArtworkIcon:#a1a1a1;--playerMissingArtworkBg:#6e6e6e;--chromeBg:rgba(45, 45, 45, 0.88);--chromeBorderColor:rgba(0, 0, 0, 0.2);--chromeVolumeIcons:rgba(255, 255, 255, 0.4);--chromePlatter:rgba(255, 255, 255, 0.25);--ctxmenuBgColor:rgba(102, 102, 105, 0.93);--ctxmenuBgColorHover:rgba(170, 170, 170, 0.2);--ctxmenuScrim:rgba(0, 0, 0, 0.55);--frostedFallbackHover:rgba(152, 152, 157, 0.8)}@media (prefers-color-scheme: dark){:host([theme=auto]){--white:white;--black:black;--systemSecondary:rgba(255, 255, 255, 0.5);--primaryColor:#0a84ff;--primaryColorRollover:#47c1ff;--primaryColorPressed:#38b2ff;--primaryColorDeepPressed:#47c1ff;--primaryColorDisabled:rgba(10, 132, 255, 0.5);--labelPrimary:rgba(255, 255, 255, 0.9);--labelPrimaryInverted:rgba(0, 0, 0, 0.95);--labelSecondary:rgba(235, 235, 245, 0.6);--labelTertiary:rgba(235, 235, 245, 0.3);--labelQuaternary:rgba(235, 235, 245, 0.18);--labelDivider:rgba(255, 255, 255, 0.1);--vibrantPrimary:rgba(255, 255, 255, 0.9);--vibrantSecondary:rgba(235, 235, 245, 0.6);--vibrantTertiary:rgba(235, 235, 245, 0.3);--vibrantQuaternary:rgba(235, 235, 245, 0.18);--vibrantDivider:rgba(255, 255, 255, 0.19);--pageBg:#404040;--shelfBg:rgba(0, 0, 0, 0.1);--overlayBg:rgba(64, 64, 64, 0.9);--overlayBgBlur:rgba(64, 64, 64, 0.7);--borderRule:rgba(255, 255, 255, 0.1);--podcastKeyPrimary:#9c5af2;--podcastKeySecondary:rgba(156, 90, 242, 0.6);--podcastKeyTertiary:rgba(156, 90, 242, 0.25);--podcastKeyQuaternary:rgba(156, 90, 242, 0.1);--podcastPlatterBg:#1c1c1e;--podcastPlatterBgTransparent:rgba(28, 28, 30, 0);--podcastScrim:rgba(255, 255, 255, 0.5);--progressElapsed:rgba(255, 255, 255, 0.9);--progressRemaining:rgba(235, 235, 245, 0.3);--menuItemHoverBg:rgba(255, 255, 255, 0.05);--tracklistGradientStart:rgba(255, 255, 255, 0.1);--tracklistGradientEnd:rgba(255, 255, 255, 0);--tracklistGradientWidth:170px;--footerPlayerBg:#2e2e2e;--emptyPlatterBg:#6e6e6e;--videoEmbedMenuBg:rgba(0, 0, 0, 0.97);--videoEmbedMenuHoverBg:rgba(60, 60, 67, 0.18);--musicKeyColor:#d6003b;--musicKeyColorOutline:rgba(214, 0, 59, 0.6);--videoEmbedSubheadline:rgba(255, 255, 255, 0.4);--videoEmbedLabel:rgba(255, 255, 255, 0.8);--lyricsBg:rgba(45, 45, 45, 0.8);--chromeVolumeTrack:rgba(255, 255, 255, 0.15);--chromeVolumeElapsed:rgba(255, 255, 255, 0.6);--chromeVolumeThumb:#cacaca;--chromeVolumeThumbShadow:rgba(0, 0, 0, 0.1);--chromeVolumeThumbShadowInset:rgba(0, 0, 0, 0.5);--chromeVolumeIcon:rgba(255, 255, 255, 0.4);--chromebg:rgba(45, 45, 45, 0.88);--playerBGFill:rgba(45, 45, 45, 0.88);--playerLCDBGFill:#4d4d4d;--playerScrubberThumb:#d9d9d9;--playerScrubberTrack:rgba(255, 255, 255, 0.1);--playerScrubberFill:rgba(255, 255, 255, 0.6);--playerMissingArtworkIcon:#a1a1a1;--playerMissingArtworkBg:#6e6e6e;--chromeBg:rgba(45, 45, 45, 0.88);--chromeBorderColor:rgba(0, 0, 0, 0.2);--chromeVolumeIcons:rgba(255, 255, 255, 0.4);--chromePlatter:rgba(255, 255, 255, 0.25);--ctxmenuBgColor:rgba(102, 102, 105, 0.93);--ctxmenuBgColorHover:rgba(170, 170, 170, 0.2);--ctxmenuScrim:rgba(0, 0, 0, 0.55);--frostedFallbackHover:rgba(152, 152, 157, 0.8)}}";export{l as apple_music_volume}