#!/bin/bash

echo "Clearing npm cache..."
npm cache clean --force

echo "Deleting pre-installed modules..."
rm -rf node_modules package-lock.json

echo "Reinstalling modules..."
npm install
