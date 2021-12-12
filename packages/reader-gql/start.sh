#!/bin/bash

if [ -n $1]; then
  echo "Please provide an API_KEY as the single argument to this script."
  exit -1
fi

docker build -t reader-gql:local .

docker run \
  --publish 4000:4000 \
  --env API_KEY=$1 \
  reader-gql:local
