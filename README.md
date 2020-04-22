# docker-basic
How to run this app?
1. Run "docker run -d --name nakilab-redis redis" to run redis with name = "nakilab-redis"
2. RUN "docker build -t mt26691/sample-node:1.2 ." to build the app
3. RUN "docker run -p 4000:3000 --link nakilab-redis mt26691/sample-node:1.2" to run the container with link to "nakilab-redis"
