package main

import (
	"fmt"
	"time"
)

func main() {
	today := time.Now().Weekday()
	fmt.Println("什么时候放假？")
	switch time.Saturday {
	case today - 2:
		fmt.Println("假日已度过。。。")
	case today - 1:
		fmt.Println("昨天都已经放假了！")
	case today + 0:
		fmt.Println("今天放假！")
	case today + 1:
		fmt.Println("明天放假~！")
	case today + 2:
		fmt.Println("后天放假~~！")
	default:
		fmt.Println("想太多~~~！")
	}
}
