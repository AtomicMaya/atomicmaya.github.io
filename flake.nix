{
  description = "NixOS angular Build";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [];
      systems = [
        "x86_64-linux"
      ];
      perSystem = { config, self', inputs', pkgs, system, ... }: {
        packages = {
          default = pkgs.stdenv.mkDerivation { 
            name = "nodejs14.19.3";
            src = pkgs.fetchurl {
              url = "https://nodejs.org/dist/v14.19.3/node-v14.19.3-linux-x64.tar.gz";
              sha256 = "sha256-zJ0Xg06zg1ZaM2j0IiuCXzQRkIE1N8Z3lz/JE9zHvdE=";
            };
            installPhase = ''
              echo "installing nodejs"
              mkdir -p $out
              cp -r ./ $out/
            '';
          };
        };

        devShells.default = pkgs.mkShell {
          buildInputs = [
            self'.packages.nodejs14
          ];
        };
      };
      flake = {
      };
    };
}