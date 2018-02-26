#!/usr/bin/env bash

docker build -t es-test-alpine -f alpine/Dockerfile .
docker build -t es-test-ubuntu -f ubuntu/Dockerfile .
