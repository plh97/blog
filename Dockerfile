FROM node



COPY . /go/src/www/pengliheng.github.com

# RUN go get github.com/codegangsta/gin

# RUN go get github.com/namsral/flag

# RUN go get -u github.com/gin-gonic/gin

WORKDIR /go/src/www/pengliheng.github.com


RUN npm install serve -g
# RUN [ "cat /root/app/server/index.go" ]
# RUN [ "cat /root/app/server/index.go" ]


CMD serve -s build