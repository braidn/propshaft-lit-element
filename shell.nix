with (import <nixpkgs> {});

mkShell {
  name = "mini-prop";
  version = "0.0.1";

  buildInputs = [
    ruby_3_2
    nodejs_20
    clang
    libxml2
    libxslt
    openssl
    readline
    zlib
    postgresql
    pkg-config
    imagemagick
    ncurses
  ];

  shellHook = ''
    mkdir -p .bundle/.nix-gems

    export LIBXML2_DIR=${pkgs.libxml2}
    export LIBXSLT_DIR=${pkgs.libxslt}
    export GEM_HOME=$PWD/.bundle/.nix-gems
    export GEM_PATH=$GEM_HOME
    export PATH=$GEM_HOME/bin:$PATH
    export PATH=$PWD/bin:$PATH
    set -o vi

    gem list -i ^bundler$ -v 2.4.10 || gem install bundler --version=2.4.10 --no-document
    bundle config --local path .bundle/cache
  '';
}

