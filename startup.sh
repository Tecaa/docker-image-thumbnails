#!/bin/bash
sudo docker-compose -f ~/code-docker/docker-compose.yml up -d

sleep 5

sh ./curl.sh
