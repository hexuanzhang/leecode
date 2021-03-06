### 思路

采用分治的思想，先将待排序数组递归地拆分为两半分别排序，然后将排序结果进行归并

### 复杂度

对排序数组进行对半拆分形成一个树形结构，这棵树正好有 n 层；自顶向下（0~n-1）, 第 m 层有 `2^m` 个数组，每个数组的长度为 ​`2^(n-m)`，将排序数组进行归并时最多需要进行 ​`2^(n-m)` 次比较。因此，每层的比较次数为 ​`2^m*2^(n-m)=2^n​`，n 层总共需要比较 `n*2^n=NlgN​` 次

|          | 最优时间复杂度 | 平均时间复杂度 | 最差时间复杂度 | 空间复杂度 | 是否稳定排序 | 备注 |
| -------- | :------------: | :------------: | :------------: | :--------: | :----------: | ---- |
| 归并排序 |    nlog(n)     |    nlog(n)     |    nlog(n)     |     n​     |      是      |      |

### 参考

- [Wikipedia](https://zh.wikipedia.org/wiki/归并排序)
- [Youtube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
