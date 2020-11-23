#!/usr/bin/env sh

if [ ! -f /app/deployed.lock ]
then
  echo "Awaiting deploy..."
fi

while [ ! -f /app/deployed.lock ]
do
  sleep 2
done

pm2-runtime /app/pm2.json
