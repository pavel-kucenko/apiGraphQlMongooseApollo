db.createUser({
    user: "admin",
    pwd: "admin",
    rolse: [{
        role: "readWrite",
        db: "api"
    }]
})