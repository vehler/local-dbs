db.createUser(
    {
        user: 'local',
        pwd: 'root',
        roles: [
            {
                role: 'readWrite',
                db: 'node-api'
            }
        ]
    }
);

db.createCollection('users');