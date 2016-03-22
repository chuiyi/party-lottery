#!/bin/bash
set -e # exit with nonzero exit code if anything fails
PACK_ROOT="pack"
PACK_TIME=`date +"%Y%m%dT%H%M%S"`

if [ -d $PACK_ROOT ]; then
  rm -rf $PACK_ROOT
fi

mkdir $PACK_ROOT

cp electron/* $PACK_ROOT/
cp favicon.png $PACK_ROOT/
cp -R dist $PACK_ROOT/
rm -f $PACK_ROOT/dist/*.map

node_modules/electron-packager/cli.js $PACK_ROOT "Party Lottery" \
  --platform=win32 \
  --arch=ia32 \
  --asar=true \
  --icon=app-icon.ico \
  --app-copyright="Copyright (c) 2015 James Shih" \
  --app-version="2.0.0" \
  --build-version="2.0.0-$PACK_TIME" \
  --overwrite
