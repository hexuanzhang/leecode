### 概念

- [原地排序](https://zh.wikipedia.org/wiki/原地算法)

  原地排序指不需要额外的辅助空间，只是在原来的排序数据中比较、交换的排序；原地排序允许使用少了的额外辅助变量。

    <table>
      	<tr>
        	<td rowspan="7">原地排序算法</td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BubbleSort">冒泡排序</a></td>
      	</tr>
        <tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BubbleSort">双向冒泡排序</a></td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/InsertionSort">插入排序</a></td>
      	</tr>
        <tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/SelectionSort">选择排序</a></td>
      	</tr>
    	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/ShellSort">希尔排序</a></td>
      	</tr>
    	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BucketSort">堆排序</a></td>
      	</tr>
    </table>

* 稳定性

  若待排序的序列中，存在多个具有**相同关键字**的记录。经过排序后，这些记录的相对次序保持不变，则称该算法是稳定的；若经排序后，记录的相对次序发生了改变，则称该算法是不稳定的。

  稳定性的好处：如果是稳定的排序算法，那么从一个键上排序，然后再从另一个键上排序，第一个键排序的结果可以为第二个键排序所用，如：基数排序，先按低位排序，逐次按高位排序，低位相同的元素其顺序再高位也相同时是不会改变的。稳定的排序算法可以避免多余的比较。

    <table>
      	<tr>
        	<td rowspan="9">稳定的排序算法</td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BubbleSort">冒泡排序</a></td>
      	</tr>
        <tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BubbleSort">双向冒泡排序</a></td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/InsertionSort">插入排序</a></td>
      	</tr>
        <tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/BucketSort">桶排序</a></td>
      	</tr>
    	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/CountSort">计数排序</a></td>
      	</tr>
    	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/MergeSort">归并排序</a></td>
      	</tr>
    	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/RadixSort">基数排序</a></td>
      	</tr>
        <tr>
        	<td rowspan="5">不稳定的排序算法</td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/SelectionSort">选择排序</a></td>
      	</tr>
      	<tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/ShellSort">希尔排序</a></td>
      	</tr>
        <tr>
            <td><a href="https://github.com/hexuanzhang/leecode/tree/master/algorithm/javaScript/Sort/QuickSort">快速排序</a></td>
      	</tr>
    </table>

### 复杂度图表

#### 大-O 复杂度曲线

![](https://blog-1255677601.cossh.myqcloud.com/blog/2019-10-30-100208.jpg)

### 参考

- [Know Thy Complexities!](https://www.bigocheatsheet.com/)
