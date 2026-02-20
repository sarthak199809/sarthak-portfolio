#!/bin/sh
set -e

# If the named volume DB doesn't exist, copy the seed DB into it
if [ ! -f "/app/db/sqlite.db" ]; then
    echo "Initializing database from seed..."
    mkdir -p /app/db
    if [ -f "/app/sqlite.db.seed" ]; then
        cp /app/sqlite.db.seed /app/db/sqlite.db
        echo "Database initialized from seed file."
    else
        echo "No seed file found, starting with an empty database."
        touch /app/db/sqlite.db
    fi
fi

# Start the Next.js server
exec node server.js
