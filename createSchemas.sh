#!/bin/bash

PATH=./node_modules/.bin:$PATH

typescript-json-schema --required ./src/app/common/models/cv.d.ts CV -o ./src/app/common/schemas/cv.schema.json