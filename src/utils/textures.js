export default function getTextureStyle(textureType) {
    const textures = {
        paper: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="paper" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%23D4AF37" opacity="0.1"/><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23C19A6B" stroke-width="0.5" opacity="0.2"/><circle cx="20" cy="20" r="1" fill="%23B8860B" opacity="0.3"/><circle cx="80" cy="60" r="1.5" fill="%23B8860B" opacity="0.2"/><path d="M10 50 Q30 40 50 50 Q70 60 90 50" stroke="%23C19A6B" stroke-width="0.3" opacity="0.15" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23paper)"/></svg>')`,
            backgroundSize: '200px 200px'
        },
        colonialPaper: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="colonialPaper" width="52" height="52" patternUnits="userSpaceOnUse"><rect width="52" height="52" fill="%23f6e5c8" opacity="0.65"/><path d="M0 0 L52 0 L52 52 L0 52 Z" fill="none" stroke="%23b48a4f" stroke-width="0.5" opacity="0.55"/><path d="M0 13 L52 13 M0 26 L52 26 M0 39 L52 39" stroke="%23d4b27a" stroke-width="0.35" opacity="0.45"/><path d="M13 0 L13 52 M26 0 L26 52 M39 0 L39 52" stroke="%23d4b27a" stroke-width="0.35" opacity="0.45"/><circle cx="10" cy="8" r="1.4" fill="%23cfa669" opacity="0.6"/><circle cx="40" cy="32" r="1.6" fill="%23a0743f" opacity="0.5"/><path d="M4 45 Q26 38 48 45" stroke="%23a0743f" stroke-width="0.6" opacity="0.4" fill="none"/><path d="M6 4 Q26 10 46 4" stroke="%23a0743f" stroke-width="0.4" opacity="0.35" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23colonialPaper)"/></svg>')`,
            backgroundSize: '180px 180px'
        },
        wood: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="wood" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="%238B0000" opacity="0.1"/><path d="M0 0 L40 0 M0 10 L40 10 M0 20 L40 20 M0 30 L40 30" stroke="%23A52A2A" stroke-width="0.5" opacity="0.3"/><path d="M0 5 L40 5 M0 15 L40 15 M0 25 L40 25 M0 35 L40 35" stroke="%23DC143C" stroke-width="0.3" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23wood)"/></svg>')`,
            backgroundSize: '80px 80px'
        },
        independenceSmoke: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><pattern id="smoke" width="90" height="90" patternUnits="userSpaceOnUse"><rect width="90" height="90" fill="%2335241a" opacity="0.85"/><path d="M5 80 Q45 70 85 80" stroke="%2350362a" stroke-width="1.5" opacity="0.35" fill="none"/><path d="M10 40 Q30 10 60 15 T85 35" stroke="%238c3a35" stroke-width="1.2" opacity="0.28" fill="none"/><path d="M0 0 L90 0 L90 2 L0 2 Z" fill="%23c94f4f" opacity="0.12"/><path d="M0 88 L90 88 L90 90 L0 90 Z" fill="%23ffb347" opacity="0.1"/><circle cx="25" cy="55" r="4" fill="%23c94f4f" opacity="0.18"/><circle cx="70" cy="28" r="5" fill="%23ffb347" opacity="0.12"/></pattern></defs><rect width="100%" height="100%" fill="url(%23smoke)"/></svg>')`,
            backgroundSize: '220px 220px'
        },
        marble: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="marble" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%231E3A8A" opacity="0.1"/><path d="M0 0 Q50 30 100 0 T200 0" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/><path d="M0 50 Q50 80 100 50 T200 50" stroke="%232196F3" stroke-width="0.8" opacity="0.15" fill="none"/><path d="M0 100 Q50 130 100 100 T200 100" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23marble)"/></svg>')`,
            backgroundSize: '200px 200px'
        },
        blueprint: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="blueprint" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="%231f2a37" opacity="0.95"/><path d="M0 0 L60 0 L60 60 L0 60 Z" fill="none" stroke="%23405b7c" stroke-width="0.6" opacity="0.4"/><path d="M0 30 L60 30" stroke="%2393a7c0" stroke-width="0.4" opacity="0.35"/><path d="M30 0 L30 60" stroke="%2393a7c0" stroke-width="0.4" opacity="0.35"/><path d="M10 10 L25 10 L25 25 L10 25 Z" fill="none" stroke="%23e3dcd3" stroke-width="0.5" opacity="0.35"/><path d="M35 45 Q45 35 55 45" stroke="%23e3dcd3" stroke-width="0.5" opacity="0.28" fill="none"/><circle cx="45" cy="15" r="2.5" fill="%23ffb347" opacity="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(%23blueprint)"/></svg>')`,
            backgroundSize: '180px 180px'
        },
        concrete: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="concrete" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="%23FF8C00" opacity="0.05"/><path d="M0 0 L50 50 M50 0 L0 50" stroke="%23FFA500" stroke-width="0.3" opacity="0.1"/><circle cx="25" cy="25" r="2" fill="%23FFD700" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23concrete)"/></svg>')`,
            backgroundSize: '100px 100px'
        },
        contemporaryWaves: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="wavesContemporary" width="120" height="120" patternUnits="userSpaceOnUse"><rect width="120" height="120" fill="%23162623" opacity="0.95"/><path d="M0 40 Q30 20 60 40 T120 40" stroke="%232b8c74" stroke-width="1.8" opacity="0.35" fill="none"/><path d="M0 80 Q30 60 60 80 T120 80" stroke="%239ed5c4" stroke-width="1.2" opacity="0.3" fill="none"/><path d="M0 20 Q25 35 50 20 T100 20" stroke="%23f0c808" stroke-width="0.9" opacity="0.18" fill="none"/><circle cx="30" cy="60" r="5" fill="%23f0c808" opacity="0.2"/><circle cx="90" cy="95" r="6" fill="%232b8c74" opacity="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(%23wavesContemporary)"/></svg>')`,
            backgroundSize: '220px 220px'
        },
        espolon: {
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="espolon" width="80" height="80" patternUnits="userSpaceOnUse"><rect width="80" height="80" fill="%23F4EBD0" opacity="0.4"/><path d="M10 15 L25 10 L30 25 L15 30 Z" fill="%23A0826D" opacity="0.35" stroke="%238B6F5E" stroke-width="0.8"/><path d="M35 20 L50 15 L55 30 L40 35 Z" fill="%23B89B85" opacity="0.3" stroke="%23957A66" stroke-width="0.7"/><path d="M20 40 L35 35 L40 50 L25 55 Z" fill="%23C19A6B" opacity="0.4" stroke="%23A0826D" stroke-width="0.9"/><path d="M45 45 L60 40 L65 55 L50 60 Z" fill="%23D4B896" opacity="0.35" stroke="%23B89B85" stroke-width="0.8"/><path d="M15 60 L30 55 L35 70 L20 75 Z" fill="%23A0826D" opacity="0.4" stroke="%238B6F5E" stroke-width="0.9"/><path d="M50 65 L65 60 L70 75 L55 80 Z" fill="%23B89B85" opacity="0.35" stroke="%23957A66" stroke-width="0.8"/><circle cx="22" cy="22" r="2.5" fill="%238B6F5E" opacity="0.4"/><circle cx="47" cy="27" r="2" fill="%23A0826D" opacity="0.35"/><circle cx="27" cy="47" r="2.5" fill="%23C19A6B" opacity="0.4"/><circle cx="52" cy="52" r="2" fill="%23B89B85" opacity="0.35"/><circle cx="25" cy="67" r="2.5" fill="%23A0826D" opacity="0.4"/><circle cx="60" cy="72" r="2" fill="%238B6F5E" opacity="0.35"/><path d="M5 5 L75 5 L75 75 L5 75 Z" fill="none" stroke="%23C19A6B" stroke-width="0.5" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23espolon)"/></svg>')`,
            backgroundSize: '160px 160px'
        }
    }

    return textures[textureType] || textures.paper
}

