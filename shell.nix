with import <nixpkgs> {};
let 
  npkgs = import (builtins.fetchGit {
    # Descriptive name to make the store path easier to identify
    name = "nodejs_v14_19_3";
    url = "https://github.com/NixOS/nixpkgs/";
    ref = "refs/heads/nixpkgs-unstable";
    rev = "f597e7e9fcf37d8ed14a12835ede0a7d362314bd";
  }) {};
in
stdenv.mkDerivation {
  name = "node";
  buildInputs = [
    npkgs.nodejs
    npkgs.nodePackages.npm
    (pkgs.writeShellScriptBin "start" ''
    npm run ng serve
    '')
    (pkgs.writeShellScriptBin "render" ''
    npm run prerender
    rm -r ./dist/atomicmayame/browser/202*
    '')
    (pkgs.writeShellScriptBin "render-test" ''
    python3 -m http.server -d ./dist/atomicmayame/browser/ 4200
    '')
  ];
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    npm install --legacy-peer-deps
  '';
}
