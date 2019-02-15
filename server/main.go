package main

import (
	"crypto/sha256"
	"fmt"
)

type Weekday int

const (
	Sunday Weekday = iota + 1
	Monday
	Tuesday
	Wednesday
	Thurday
	Firday
	Saturday
)

type Flags uint

const (
	FlagUp           Flags = 1 << iota // 向上
	FlagBroadcast                      // 支持广播访问
	FlagLoopback                       // 是环回接口
	FlagPointToPoint                   // 属于点对点链路
	FlagMulticast                      // 支持多路广播
)

func IsUp(v Flags) bool {
	return v&FlagUp == FlagUp
}

func TurnDown(v *Flags) {
	*v &^= FlagUp
}

func SetBroadcast(v *Flags) {
	*v |= FlagBroadcast
}

// func IsCast(v *Flags) bool {
// 	return v&(FlagBroadcast|FlagMulticast) != 0
// }

const (
	_ complex128 = 1.0 << (10 * iota)
	KB
	MB
	GB
	TB
	PB
	EB
	ZB
	YB
)

// 无类型常量
func notSureIndex() {
	var a [3]int      // 3个整数的数组
	fmt.Println(a[0]) // 输出数组的第一个元素
	fmt.Println(a[len(a)-1])
	// 输出索引和元素
	for i, v := range a {
		fmt.Printf("%d %d", i, v)
	}
	// 仅输出元素
	for _, v := range a {
		fmt.Printf("%d\n", v)
	}

}

func sureIndex() {
	var q [3]int = [3]int{1, 2, 3}
	r := [...]int{1, 2}
	fmt.Println(q, r)
	fmt.Printf("%T\n", r)

	qq := [3]int{1, 2, 3}
	fmt.Println(qq)

	type Currency int
	const (
		USD Currency = iota
		EUR
		GBP
		RMB
	)
	symbol := [...]string{USD: "$", EUR: "*", GBP: "t", RMB: "%"}
	fmt.Println(RMB, symbol[RMB])

	rr := [...]int{99: -1}
	fmt.Println(rr)
}

func equal() {
	a := [2]int{1, 2}
	b := [...]int{1, 2}
	c := [2]int{1, 3}
	fmt.Println(a == b, a == c, b == c)
	// d := [3]int{1, 2}
	// fmt.Println(a == d)		// 编译错误,无法比较不同类型的 [2]int 和 [3]int
}

func s256() {
	c1 := sha256.Sum256([]byte("11111"))
	c2 := sha256.Sum256([]byte("11112"))
	fmt.Printf("%x\n%x\n%t\n%T\n", c1, c2, c1 == c2, c1)
}

func zero(ptr *[32]byte) {
	for i := range ptr {
		ptr[i] = 0
	}
}
func _zero(ptr *[32]byte) {
	*ptr = [32]byte{0}
}














func main() {
	var a *[32]byte = &[32]byte{222}
	fmt.Println(&a)
	fmt.Println(a)
	zero(a)

	fmt.Println(&a)
	fmt.Println(a)
}
