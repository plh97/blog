FROM golang



# COPY . /go/src/www

RUN go get github.com/codegangsta/gin

# RUN go get github.com/namsral/flag

RUN go get -u github.com/gin-gonic/gin

# WORKDIR /go/src/www/server


# RUN "ls"
# RUN [ "cat /root/app/server/index.go" ]
# RUN [ "cat /root/app/server/index.go" ]


# CMD gin run --notifications index.go


# serve -s build