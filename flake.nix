{
  description = "Astro Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/4c8f3d660eb64cecb01d6636538dcafac67ee805";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachSystem [ "x86_64-linux" ] (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        startScript = pkgs.writeShellScriptBin "start" ''
          echo "Starting Astro dev environment"
          npm run dev
        '';

        renderScript = pkgs.writeShellScriptBin "render" ''
          npm run build --verbose
          echo "Removing weird compilation artifacts..."
          rm -r ./dist/atomicmayame/browser/202*
          echo "Removed weird compilation artifacts..."
        '';

        renderTestScript = pkgs.writeShellScriptBin "render-test" ''
          python3 -m http.server -d ./dist 4321
        '';

        deployScript = pkgs.writeShellScriptBin "deploy-pages" ''
          echo "Checking ability to push to subtree"
          set +e
          git status | grep -E "modified|new"
          if [ $? -ne 0 ]
          then
            set -e
            echo ""
            echo "Pushing to subtree"
            # git subtree push --prefix dist/ origin gh-pages
          else
            set -e
            echo ""
            echo "Git tree is unclean, commit to main first"
          fi
        '';

        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.npm
            python3
            startScript
            renderScript
            renderTestScript
            deployScript
          ];

          shellHook = ''
            echo "Installing dependencies..."
            export PATH="$PWD/node_modules/.bin/:$PATH"
            npm install
            echo "Dependencies installed."
            echo ""
            echo "🚀 Angular (old) development environment!"
            echo ""
            echo "Available commands:"
            echo "  start         - Start Astro dev instance (http://localhost:4321)"
            echo "  render        - Run Astro pre-render"
            echo "  render-test   - Test pre-rendered output (http://localhost:4321)"
            echo "  deploy-pages  - Push to git subtree"
          '';
        };
      in {
        packages = {
          default = startScript;
          start = startScript;
          render = renderScript;
          render-test = renderTestScript;
          deploy-pages = deployScript;
        };

        devShells.default = devShell;
      }
  );
}