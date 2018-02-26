#!/usr/bin/env bash

docker run -d --name es-test-alpine -e ELASTIC_HOST=[es-host] es-test-alpine
docker run -d --name es-test-ubuntu -e ELASTIC_HOST=[es-host] es-test-ubuntu
