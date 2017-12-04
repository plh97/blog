package main

import (
	"fmt"
	"errors"
)


func main()  {
	err := errors.New("")
	s:=`hello
	123123`
	s = "c"+s[1:]
	fmt.Printf("%s\n",s)
}