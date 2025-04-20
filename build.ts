import { build } from "esbuild";

build({
    entryPoints: ['index.ts'],
    outdir: "../dist-server",
    minify: true,
    bundle: true,
    packages: "bundle",
    platform: "node",
    external: ['emitter']
})