### 思路

基数排序是一种非比较型的**整数排序算法**，其思想是分配排序，将待排序的元素按特定的方式分配到对应的桶中，最后进行组合。分配的方式有两种：最低位优先（LSD，Least sgnificant digital）和最高位优先（MSD，Most sgnificant digital）。LSD 的排序方式从最低位开始，适合位数少的场景；MSD 则从最高位开始，适合位数多的场景。

### 复杂度

|          | 最优时间复杂度 | 平均时间复杂度 | 最差时间复杂度 | 空间复杂度 | 是否稳定排序 | 备注 |
| -------- | :------------: | :------------: | :------------: | :--------: | :----------: | ---- |
| 归并排序 |      n\*k      |      n\*k      |      n\*k      |    n+k     |      是      |      |

> K 为桶的数量

### 参考

- [Wikipedia](https://zh.wikipedia.org/wiki/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F)
- [Youtube](https://www.youtube.com/watch?v=nu4gDuFabIM)
