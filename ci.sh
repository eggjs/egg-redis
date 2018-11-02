#!/bin/sh
# set redis-sentinel test environment
echo 'sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 60000
sentinel failover-timeout mymaster 180000
sentinel parallel-syncs mymaster 1' > sentinel.conf
echo 'sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 60000
sentinel failover-timeout mymaster 180000
sentinel parallel-syncs mymaster 1
port 26380' > sentinel.conf_1
redis-server --daemonize yes
redis-server sentinel.conf --sentinel --daemonize yes
redis-server sentinel.conf_1 --sentinel --daemonize yes
